import { motion } from 'motion/react';

const activities = [
  {
    image: "/image2.jpeg",
    caption: "Practical Vocational Training",
  },
  {
    image: "/image3.jpeg",
    caption: "Community Integration Workshop",
  },
  {
    image: "/image6.jpeg",
    caption: "Outdoor Social Inclusion Session",
  },
  {
    image: "/image4.jpeg",
    caption: "Large-scale Empowerment Seminar",
  }
];

export default function Activities() {
  return (
    <section id="activities" className="py-20 md:py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="pill mb-4 mx-auto md:mx-0">In Action</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 italic leading-tight">Our Work <span className="text-brand-green">on the Ground.</span></h2>
          </div>
          <p className="text-slate-500 font-bold max-w-xs text-[10px] md:text-sm uppercase tracking-widest pb-2 text-center md:text-right">
            Weekly short reels and stories from our local communities in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-white/50">
                <img 
                  src={act.image} 
                  alt={act.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold text-sm">{act.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.youtube.com/@sproutfoundatio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-200"
          >
            Watch Weekly Reels on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
