import { Building2, HeartHandshake } from 'lucide-react';

export default function Donate() {
  return (
    <section id="donate" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="pill mb-6 bg-yellow-100 text-yellow-800 mx-auto lg:mx-0">Support Our Mission</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-8 italic">Partner With <span className="text-brand-green">Sprout.</span></h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 mx-auto lg:mx-0 max-w-xl">
              "Make a donation today and help give a young person a second chance at life." Your partnership and financial support will enable us to provide critical skills training, mentorship, and sustainable livelihood opportunities.
            </p>
            <div className="flex items-center gap-4 p-4 md:p-6 bg-slate-900 rounded-2xl md:rounded-3xl text-white text-left mx-auto lg:mx-0 max-w-sm sm:max-w-md lg:max-w-none">
              <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-slate-900">
                <HeartHandshake size={24} />
              </div>
              <div>
                <p className="font-bold">#TogetherWeCan</p>
                <p className="text-sm text-slate-400">Restore dignity, rebuild futures.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid gap-4 md:gap-6">
            <div className="bank-card bg-slate-50 border-green-100 border-2 p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Guaranty Trust Bank (GTB)</div>
                <Building2 size={20} className="text-brand-green opacity-50" />
              </div>
              <div className="text-xl md:text-2xl font-black text-slate-800 select-all mb-1 tracking-tight break-all">3003330814</div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">SORT CODE: 058-083244</div>
              <p className="mt-3 text-[9px] md:text-[10px] text-slate-400 font-bold uppercase leading-tight">Account Name: SPROUT FOUNDATION FOR YOUTH REINTEGRATION</p>
            </div>

            <div className="bank-card hover:border-brand-yellow transition-colors p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Stanbic IBTC Bank</div>
                <Building2 size={20} className="text-slate-300" />
              </div>
              <div className="text-xl md:text-2xl font-black text-slate-800 select-all mb-1 tracking-tight break-all">0076249878</div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">SORT CODE: 221150014</div>
              <p className="mt-3 text-[9px] md:text-[10px] text-slate-400 font-bold uppercase leading-tight">Account Name: SPROUT FOUNDATION FOR YOUTH REINTEGRATION</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
