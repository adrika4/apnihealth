import { PhoneCall } from 'lucide-react';

export default function InnovationLayer() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
      <div className="animate-fade-in-fast opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
        <div className="bg-nature-cream border-2 border-nature-gold/30 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow duration-500">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-gold/20 text-yellow-800 font-bold text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse"></span>
              No Internet Required
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
              IVR Calling System
            </h3>
            <p className="text-xl text-gray-600 font-medium">
              Access healthcare guidance from any phone. Just dial our toll-free number.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a href="tel:18001234567" className="group relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-nature-sage/30 rounded-full animate-pulse-slow scale-110 blur-md"></div>
              <div className="relative px-8 py-6 bg-white rounded-[2rem] shadow-sm flex items-center gap-4 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-nature-sage/20 p-3 rounded-2xl">
                  <PhoneCall className="w-6 h-6 text-nature-moss group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-2xl font-bold text-nature-moss tracking-wider">
                  1800-123-4567
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
