import { Globe, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-nature-sage/20 rounded-2xl flex items-center justify-center group-hover:bg-nature-sage/40 transition-colors duration-500">
            <span className="text-nature-moss font-bold text-xl">+</span>
          </div>
          <h1 className="text-2xl font-bold text-nature-moss tracking-tight font-sans">apnihealth</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-nature-sage/10 transition-colors duration-300 text-nature-moss">
            <Globe className="w-5 h-5 text-nature-sage" />
            <span className="font-medium hidden sm:block">English</span>
          </button>
          
          <button className="w-12 h-12 rounded-full bg-nature-cream border border-nature-sage/30 flex items-center justify-center shadow-[0_0_15px_rgba(158,186,156,0.3)] hover:shadow-[0_0_25px_rgba(158,186,156,0.5)] transition-all duration-500">
            <User className="w-5 h-5 text-nature-moss" />
          </button>
        </div>
      </div>
    </header>
  );
}
