import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden flex items-center min-h-[90vh] bg-brand-bg" style={{ paddingBottom: '160px', paddingLeft: '-2px' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-12 items-center md:-mt-12 lg:-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-center lg:text-left"
          style={{ marginBottom: '2px' }}
        >
          <div className="pill mb-6 mx-auto lg:mx-0">Youth Reintegration</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-tight md:leading-[1.1] mb-6 italic">
            Transforming Lives,<br />
            <span className="text-brand-green">Rebuilding Futures.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Sprout Foundation empowers vulnerable youth, returnees, and women to thrive through skills development, entrepreneurship, and social inclusion.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 justify-center lg:justify-start">
            <a href="#donate" className="btn-primary text-base md:text-lg px-8 py-3 md:px-10 md:py-4 justify-center">Partner With Us</a>
            <a href="#mission" className="border-2 border-slate-200 px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors text-center">Our Mission</a>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-black text-green-700">1.2k+</div>
              <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-green-700">NGA</div>
              <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Based Organization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-green-700">85%</div>
              <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Self-Reliance Rate</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="/image1.jpeg" 
              alt="The Sprout Foundation Community" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow rounded-full -z-0 opacity-50 blur-2xl animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-green rounded-full -z-0 opacity-20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
