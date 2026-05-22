import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import storyImg from '../assets/images/regenerated_image_1778882241066.webp';

export default function AboutPage() {
  return (
    <div id="about-page" className="pt-32 pb-24 bg-[#F9F8F6] min-h-screen">
      <div id="about-container" className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <motion.div
          id="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#607564] uppercase tracking-widest text-sm font-semibold mb-3 block">Our Story</span>
          <h1 id="about-story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C302E] leading-tight mb-6">
            The Story Behind Shine Well
          </h1>
          <p className="text-xl md:text-2xl italic text-[#5c635f] font-light max-w-2xl mx-auto leading-relaxed">
            How One Mother's Love Became a Mission to Transform Spaces
          </p>
          <div className="w-12 h-[1px] bg-[#607564] mx-auto mt-8"></div>
        </motion.div>

        {/* Hero Section with Image & Initial Hook */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-6 text-lg text-[#5c635f] font-light leading-relaxed"
          >
            <p className="text-xl font-medium text-[#2C302E] leading-relaxed">
              Some businesses are built from ambition. Some are built from necessity. And some — the ones that truly last — are built from love.
            </p>
            <p className="text-xl font-medium text-[#2C302E]">
              Shine Well is one of those.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div id="about-image-wrapper" className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 bg-[#e8e5df]">
              <img 
                id="about-hero-image"
                src={storyImg} 
                alt="Shine Well founder Lina" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Narrative Content in comfortable reading column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-12 text-lg text-[#5c635f] font-light leading-relaxed max-w-3xl mx-auto"
        >
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2">A Dream Earned with Dedication</h2>
            <p>
              In 2001, Lina achieved something she had worked toward for years: she graduated as a nurse.
            </p>
            <p>
              It was more than a degree. It was proof of everything she believed about herself — that she was capable, that she could build something, that care and dedication could open doors. Nursing felt like a calling. It was a profession built around helping people, around showing up for them in their most vulnerable moments. And Lina was made for that.
            </p>
            <p>
              But life, as it tends to do, had its own plans.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2">The Moment That Changed Everything</h2>
            <p>
              In 2003, Lina's son was born.
            </p>
            <p>
              And in that moment — that specific, irreversible, breathtaking moment — her entire sense of what mattered rearranged itself.
            </p>
            <p>
              She had her career. She had her training. She had a clear professional path ahead of her. And yet, standing there with her child in her arms, she felt something she hadn't fully anticipated: a pull so strong it couldn't be reasoned with. The pull to be present. Not just available — truly, fully present for the life her family was building.
            </p>
            <p>
              When her daughter arrived, that feeling only deepened.
            </p>
            <p>
              Lina began to ask herself the question that every mother who has ever held her child while thinking about work has asked: Is there a way to do both? To build something real — something that sustains my family — without handing my children's childhood to someone else?
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2">A Passion She Already Carried</h2>
            <p>
              What Lina discovered in that season of searching wasn't something new. It was something she had always known about herself, but had never fully named.
            </p>
            <p>
              She loved transforming spaces.
            </p>
            <p>
              Not cleaning in the way people talk about it as a chore — something to be dreaded and dispatched as quickly as possible. Lina experienced it differently. When she walked into a room that was disordered, heavy with the invisible weight of accumulated neglect, and walked out leaving it clean, ordered, and light — she felt something that she could only describe as purpose.
            </p>
            <p>
              She noticed what happened to people in those spaces after. How a family exhaled when their home felt restored. How a business owner's posture changed when their office was crisp and welcoming. How children played differently in a clean room. How people breathed differently.
            </p>
            <p>
              She realized: this is a form of care. This is not so different from nursing. You are helping people. You are making their lives lighter. You are showing up for them in a way that changes how they feel every single day.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2">The Decision</h2>
            <p>
              Lina made her choice.
            </p>
            <p>
              She would build something of her own — a business rooted in her values, structured around her family, and built on the belief that a clean, transformed space is one of the most generous gifts you can offer another person.
            </p>
            <p>
              She brought with her the warmth and intentionality she had grown up with in Brazil, where the state of your home reflects the care you have for everyone who lives in it and everyone who visits. Where <em>cuidado</em> — care — is not passive. It is active. It is chosen, every day.
            </p>
            <p>
              She brought her nursing precision: the attention to detail, the commitment to doing the work completely, the understanding that shortcuts in care are never really shortcuts.
            </p>
            <p>
              And she brought the love that had set all of this in motion — for her children, her family, and the simple, profound belief that people deserve to live and work in spaces that restore them.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2">What Shine Well Means</h2>
            <p>
              Shine Well is not just a cleaning company.
            </p>
            <p>
              It is Lina's answer to the question she asked herself in 2003, holding her son for the first time.
            </p>
            <p>
              Every home she and her team clean is a family whose mornings she is making lighter. Every office reception area they leave spotless is a business owner whose first impression she is protecting. Every deep clean they perform is a reset — for the space, yes, but also for the person who lives or works inside it.
            </p>
            <blockquote className="border-l-4 border-[#607564] pl-6 italic my-6 text-xl text-[#2C302E] bg-[#f0ede6] py-3 pr-4 rounded-r-lg">
              "This work allows me to provide for my family, and at the same time carry joy, peace, and transformation into the lives of others. That is everything I hoped it could be."
              <span className="block text-sm font-mono tracking-wider uppercase text-[#607564] mt-2 not-italic">— Lina</span>
            </blockquote>
            <p>
              She built Shine Well to sustain her family. And along the way, she discovered that sustaining families — through clean, calm, energized spaces — is exactly what Shine Well does for everyone it serves.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#2C302E] border-b border-[#e8e5df] pb-2">Serving Kansas City with Heart</h2>
            <p>
              From Brookside to Overland Park, from the Crossroads to Corporate Woods, from Prairie Village to Lee's Summit — Shine Well brings Lina's philosophy to homes and businesses across the Kansas City metro every single day.
            </p>
            <p>
              The woman who chose her children is still choosing them. And in choosing them, she chose all of us too.
            </p>
          </section>

          {/* Bottom Card / Outro Sign-off */}
          <div className="bg-[#f0ede6] border border-[#e8e5df] rounded-2xl p-8 text-center space-y-4 mt-16 shadow-sm">
            <Heart className="w-8 h-8 text-[#C86B53] mx-auto animate-pulse" />
            <h3 className="text-2xl font-serif text-[#2C302E]">Shine Well Cleaning Services</h3>
            <p className="text-[#607564] font-medium tracking-wide">Kansas City, KS & MO</p>
            <p className="italic text-[#5c635f] text-lg">
              "Founded with love. Built on care. Dedicated to your space."
            </p>
          </div>

          {/* CTA Link */}
          <div id="about-cta-container" className="text-center pt-8">
            <Link 
              id="about-booking-link"
              to="/booking"
              className="inline-flex items-center gap-2 bg-[#C86B53] hover:bg-[#b55e47] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Book Your Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
