import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const carouselImages = [
  "/image2.jpeg",
  "/image3.jpeg",
  "/image4.jpeg",
  "/image5.jpeg",
  "/image6.jpeg",
  "/image7.jpeg"
];

export default function Mission() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="mission" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="pill mb-6">Our Impact</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-8 italic leading-tight text-center lg:text-left">Giving a second chance<br /><span className="text-brand-green">at life.</span></h2>
            <div className="space-y-6 text-slate-600 font-sans text-base md:text-lg leading-relaxed text-center lg:text-left">
              <p>
                Sprout Foundation for Youth Reintegration is dedicated to empowering vulnerable youth, returnees, and women to rebuild their lives through practical skills and collective support.
              </p>
              <p>
                By providing practical training, mentorship, and psychosocial support, we equip individuals with the tools they need to thrive economically and socially within their communities.
              </p>
              <p className="font-bold text-slate-900 border-l-4 border-brand-yellow pl-4 md:pl-6 py-2 text-left">
                "Together, we can restore dignity, rebuild futures, and transform communities."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentIndex}
                  src={carouselImages[currentIndex]} 
                  alt={`Activity ${currentIndex + 1}`} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {carouselImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-brand-yellow' : 'w-2 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-4 bg-brand-yellow p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl max-w-[200px] md:max-w-xs -rotate-2 z-30">
              <p className="text-sm md:text-xl font-black text-slate-900 leading-tight">Sustainable pathways for income generation.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
