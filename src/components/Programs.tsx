import { motion } from 'motion/react';
import { BookOpen, Users, Briefcase, Heart } from 'lucide-react';

const programs = [
  {
    icon: <BookOpen className="text-sprout" size={32} />,
    title: "Skills Development",
    description: "Promoting digital and vocational skills to equip individuals with practical tools for the modern workforce.",
  },
  {
    icon: <Briefcase className="text-sprout" size={32} />,
    title: "Entrepreneurship",
    description: "Creating sustainable pathways for income generation and supporting youth to launch independent ventures.",
  },
  {
    icon: <Users className="text-sprout" size={32} />,
    title: "Social Inclusion",
    description: "Strengthening community resilience and helping at-risk groups become confident, productive members of society.",
  },
  {
    icon: <Heart className="text-sprout" size={32} />,
    title: "Psychosocial Support",
    description: "Providing mentorship and emotional backing to help returnees and vulnerable youth heal and thrive.",
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <div className="pill mb-4 mx-auto">Our Approach</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic leading-tight">How We Drive <span className="text-brand-green">Impact.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-bg p-8 rounded-3xl border border-slate-100 hover:border-brand-green transition-all group lg:text-left text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform mx-auto lg:mx-0">
                <div className="text-brand-green">
                  {program.icon}
                </div>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{program.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 italic">Watch Our Journey</h3>
            <p className="text-slate-300 font-medium mb-8 text-lg">
              Follow our weekly progress. We share reels and stories directly from the communities we serve.
            </p>
            <a href="https://www.youtube.com/@sproutfoundatio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-yellow hover:scale-105 transition-all">
              Visit Our YouTube Channel
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green opacity-10 blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow opacity-10 blur-3xl -z-0" />
        </motion.div>
      </div>
    </section>
  );
}
