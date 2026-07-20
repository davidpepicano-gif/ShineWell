import express from "express";
import { createServer as createViteServer } from "vite";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Stripe initialization (Lazy to avoid crash if key is missing)
  let stripeClient: Stripe | null = null;
  function getStripe(): Stripe {
    if (!stripeClient) {
      const key = process.env.STRIPE_SECRET_KEY;
      if (!key) {
        throw new Error('STRIPE_SECRET_KEY environment variable is required');
      }
      stripeClient = new Stripe(key);
    }
    return stripeClient;
  }

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      const stripe = getStripe();
      const { amount, currency = 'usd' } = req.body;

      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount || 15000, // Default $150.00
        currency: currency,
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error: any) {
      console.error("Stripe error:", error);
      res.status(400).send({
        error: {
          message: error.message,
        }
      });
    }
  });

  // Legacy URL Redirects & Gone (410) Handlers for SEO optimization
  const redirects: Record<string, string> = {
    "/service": "/services",
    "/service/": "/services",
    "/commercial-cleaning": "/services/commercial-deep-cleaning",
    "/commercial-cleaning/": "/services/commercial-deep-cleaning",
    "/institutional": "/services/commercial-deep-cleaning",
    "/institutional/": "/services/commercial-deep-cleaning",
    "/commercial-cleaning-kansas-city": "/services/commercial-deep-cleaning",
    "/commercial-cleaning-kansas-city/": "/services/commercial-deep-cleaning",
    "/regular-house-cleaning": "/services/routine-housekeeping",
    "/regular-house-cleaning/": "/services/routine-housekeeping",
    "/house-cleaning": "/services/routine-housekeeping",
    "/house-cleaning/": "/services/routine-housekeeping",
    "/deep-cleaning": "/services/deep-dives",
    "/deep-cleaning/": "/services/deep-dives",
    "/move-in-out": "/services/move-in-move-out",
    "/move-in-out/": "/services/move-in-move-out",
  };

  app.use((req, res, next) => {
    const rawPath = req.path;
    const normalizedPath = rawPath.toLowerCase();

    // Exact redirects
    if (redirects[normalizedPath]) {
      return res.redirect(301, redirects[normalizedPath]);
    }
    if (normalizedPath !== '/' && normalizedPath.endsWith('/') && redirects[normalizedPath.slice(0, -1)]) {
      return res.redirect(301, redirects[normalizedPath.slice(0, -1)]);
    }

    // Dynamic pattern match for legacy sub-pages
    if (normalizedPath.startsWith('/service/')) {
      const subPath = normalizedPath.replace(/^\/service\//, '');
      const cleanSubPath = subPath.endsWith('/') ? subPath.slice(0, -1) : subPath;

      if (!cleanSubPath) {
        return res.redirect(301, '/services');
      }

      if (['commercial', 'commercial-cleaning', 'office-cleaning', 'janitorial'].includes(cleanSubPath)) {
        return res.redirect(301, '/services/commercial-deep-cleaning');
      }
      if (['residential', 'house-cleaning', 'regular-cleaning', 'housekeeping'].includes(cleanSubPath)) {
        return res.redirect(301, '/services/routine-housekeeping');
      }
      if (['deep', 'deep-cleaning', 'spring-cleaning'].includes(cleanSubPath)) {
        return res.redirect(301, '/services/deep-dives');
      }
      if (['move', 'move-in-out', 'move-out', 'move-in'].includes(cleanSubPath)) {
        return res.redirect(301, '/services/move-in-move-out');
      }
      if (['post-construction', 'construction', 'renovation'].includes(cleanSubPath)) {
        return res.redirect(301, '/services/post-construction');
      }

      return res.redirect(301, '/services');
    }

    // Known legacy CMS or spam endpoints return 410 Gone to clear search indexes
    const gonePaths = [
      '/xmlrpc.php',
      '/wp-login.php',
      '/wp-admin',
      '/wp-content',
      '/wp-includes',
    ];
    if (gonePaths.some(gp => normalizedPath.startsWith(gp))) {
      return res.status(410).send('Gone - Outdated legacy resource.');
    }

    next();
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      // Remove trailing slash if present to look up the pre-rendered folder structure
      const cleanPath = req.path.endsWith('/') && req.path !== '/' ? req.path.slice(0, -1) : req.path;
      const staticHtmlPath = path.join(distPath, cleanPath, 'index.html');
      
      if (cleanPath && cleanPath !== '/' && fs.existsSync(staticHtmlPath)) {
        res.sendFile(staticHtmlPath);
      } else {
        res.sendFile(path.join(distPath, 'index.html'));
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
