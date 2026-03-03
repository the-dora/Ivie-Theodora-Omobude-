import { motion } from "motion/react";
import { ArrowRight, Download, TrendingUp, Sparkles, Cpu } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-stark-snow selection:bg-electric-lime selection:text-ink">
      {/* Header */}
      <header className="px-6 py-8 md:px-12 md:py-12 flex justify-between items-start border-b border-ink/5">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold tracking-widest uppercase"
        >
          IVIE THEODORA OMOBUDE
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-ink/60 flex gap-4 md:gap-8"
        >
          <span>[STRATEGY]</span>
          <span>[ANALYTICS]</span>
          <span>[CURATION]</span>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 md:px-12 md:py-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-bodoni text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight"
            >
              Architecting Digital Desirability through Data.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 text-lg md:text-xl lg:text-2xl font-light text-ink/70 max-w-2xl leading-relaxed"
            >
              "Increasing engagement by 300% for faith and lifestyle collectives through the intersection of Emotional Intelligence and Performance Analytics."
            </motion.p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-electric-lime text-ink px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-3 shadow-xl shadow-electric-lime/20"
            >
              Download Resume <Download size={18} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - The Three Pillars */}
      <section className="px-6 py-24 md:px-12 bg-white border-y border-ink/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40 mb-4">The Three Pillars</h2>
            <div className="h-px w-24 bg-ink/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {/* Pillar I */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-stark-snow rounded-xl group-hover:bg-ink group-hover:text-stark-snow transition-colors duration-500">
                    <TrendingUp size={24} />
                  </div>
                  <span className="text-4xl font-bodoni italic text-ink/20 group-hover:text-ink transition-colors duration-500">01</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-electric-lime bg-ink px-3 py-1 rounded-lg inline-block">300%</div>
                  <div className="text-[8px] tracking-widest uppercase text-ink/40 mt-1 font-bold">Growth Metric</div>
                </div>
              </div>
              <h3 className="text-2xl font-bodoni mb-4">Faith & Lifestyle Scalability</h3>
              <p className="text-ink/60 leading-relaxed mb-6">
                How I transformed a community-based lifestyle brand into a high-engagement ecosystem, tripling organic reach without compromising brand sanctity.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Audience Retention", "Community Architecture", "Sentiment Analysis"].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-stark-snow rounded-md text-ink/40 font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Pillar II */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-default"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-stark-snow rounded-xl group-hover:bg-ink group-hover:text-stark-snow transition-colors duration-500">
                  <Sparkles size={24} />
                </div>
                <span className="text-4xl font-bodoni italic text-ink/20 group-hover:text-ink transition-colors duration-500">02</span>
              </div>
              <h3 className="text-2xl font-bodoni mb-4">Visual Semiotics & Curation</h3>
              <p className="text-ink/60 leading-relaxed mb-6">
                Developing content frameworks that mirror the craftsmanship of heritage tech and high-fashion houses.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Brand Heritage", "Visual Storytelling", "Premium Positioning"].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-stark-snow rounded-md text-ink/40 font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Pillar III */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-default"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-stark-snow rounded-xl group-hover:bg-ink group-hover:text-stark-snow transition-colors duration-500">
                  <Cpu size={24} />
                </div>
                <span className="text-4xl font-bodoni italic text-ink/20 group-hover:text-ink transition-colors duration-500">03</span>
              </div>
              <h3 className="text-2xl font-bodoni mb-4">Data-Driven Narratives</h3>
              <p className="text-ink/60 leading-relaxed mb-6">
                Utilizing 2026 AI workflows to predict trend cycles and automate high-touch engagement.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Predictive Analytics", "ROI Optimization", "Trend Forecasting"].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-stark-snow rounded-md text-ink/40 font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-32 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40 mb-8">The Philosophy</h2>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-bodoni text-4xl md:text-5xl leading-tight"
            >
              "I view social media not as a broadcast channel, but as a digital sensory experience."
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-ink/70 leading-relaxed font-light"
          >
            <p>
              My approach combines the rigorous data-tracking of a tech startup with the nuanced 'taste' required by elite houses like Bottega Veneta.
            </p>
            <p>
              By leveraging predictive data models and Emotional Intelligence, I don’t just capture attention—I engineer loyalty. My recent work in the lifestyle sector resulted in a 3x increase in engagement, proving that when strategy meets curated creativity, growth becomes inevitable.
            </p>
            <div className="pt-8">
              <button className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
                Let's Collaborate <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / ATS Section */}
      <footer className="px-6 py-24 md:px-12 bg-ink text-stark-snow">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-stark-snow/40">Technical Core Competencies</h2>
            <div className="h-px flex-grow bg-stark-snow/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-stark-snow/40 mb-6">Strategic</h4>
              <ul className="space-y-2 text-sm text-stark-snow/70">
                <li>High-Net-Worth (HNW) Targeting</li>
                <li>Global Brand Consistency</li>
                <li>Crisis Communication</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-stark-snow/40 mb-6">Technical</h4>
              <ul className="space-y-2 text-sm text-stark-snow/70">
                <li>GA4 & Meta Advanced Analytics</li>
                <li>AI-Integrated Content Creation</li>
                <li>CRM Social Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-stark-snow/40 mb-6">Creative</h4>
              <ul className="space-y-2 text-sm text-stark-snow/70">
                <li>Narrative Design</li>
                <li>Color Theory Application</li>
                <li>Minimalist UI/UX for Social</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-stark-snow/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] tracking-widest uppercase text-stark-snow/40">
              © 2026 IVIE THEODORA OMOBUDE. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-[10px] tracking-widest uppercase font-bold">
              <a href="#" className="hover:text-electric-lime transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-electric-lime transition-colors">Instagram</a>
              <a href="#" className="hover:text-electric-lime transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
