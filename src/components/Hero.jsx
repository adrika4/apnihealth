import { Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import ChatInput from './ChatInput';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32">
      {/* Drifting Abstract Background Blobs */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-nature-sage/30 blob-shape-1 animate-blob-spin mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-nature-peach/30 blob-shape-2 animate-blob-spin mix-blend-multiply filter blur-2xl flex" style={{ animationDelay: '2s', animationDuration: '25s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-nature-lavender/30 blob-shape-3 animate-blob-spin mix-blend-multiply filter blur-2xl flex" style={{ animationDelay: '4s', animationDuration: '30s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nature-moss mb-4 text-balance">
            नमस्ते, हम आपकी कैसे मदद कर सकते हैं?
          </h2>
          <p className="text-xl md:text-2xl text-nature-moss/80 font-medium mb-12">
            How can we help you today?
          </p>
        </motion.div>

        {/* Pulsing Central Mic Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-nature-sage/20 rounded-full animate-pulse-slow blur-xl transform scale-150"></div>
          <div className="absolute inset-0 bg-nature-sage/40 rounded-full animate-pulse-slow blur-md transform scale-125" style={{ animationDelay: '1s' }}></div>
          <button className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(74,107,70,0.3)] hover:scale-105 transition-transform duration-500 ease-in-out group">
            <Mic className="w-12 h-12 md:w-16 md:h-16 text-nature-moss group-hover:text-nature-sage transition-colors duration-500" />
            
            {/* Ambient inner glow */}
            <div className="absolute inset-2 rounded-full border border-nature-sage/20"></div>
          </button>
        </div>
        
        <motion.p 
          className="mt-8 text-nature-moss/60 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Tap the mic to speak
        </motion.p>
        
        <ChatInput />
      </div>
    </section>
  );
}
