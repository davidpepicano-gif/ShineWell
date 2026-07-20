import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv, Plugin} from 'vite';

function inlineCssPlugin(): Plugin {
  return {
    name: 'inline-css-plugin',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx || !ctx.bundle) return html;
        
        // Find the compiled CSS file in the bundle
        const cssBundleKey = Object.keys(ctx.bundle).find(key => key.endsWith('.css'));
        if (!cssBundleKey) return html;
        
        const cssAsset = ctx.bundle[cssBundleKey];
        if (cssAsset && cssAsset.type === 'asset') {
          const cssCode = cssAsset.source as string;
          
          // Remove any injected stylesheet link tag
          const cleanHtml = html.replace(/<link[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']+\.css["'][^>]*>/g, '');
          
          // Inject the CSS inlined into a <style> tag in the <head>
          return cleanHtml.replace('</head>', `  <style id="critical-inline-css">${cssCode}</style>\n  </head>`);
        }
        return html;
      }
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), inlineCssPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
