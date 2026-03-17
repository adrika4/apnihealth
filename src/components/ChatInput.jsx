import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChatInput() {
  return (
    <motion.div 
      className="w-full max-w-xl mx-auto mt-8 relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <div className="relative group flex items-center bg-white/60 backdrop-blur-md border border-nature-sage/30 rounded-[3rem] p-2 shadow-sm focus-within:shadow-[0_0_20px_rgba(158,186,156,0.2)] focus-within:border-nature-sage/60 transition-all duration-500">
        
        <input 
          type="text" 
          placeholder="यहाँ अपनी समस्या लिखें... / Or type your symptoms here..." 
          className="w-full bg-transparent px-6 py-4 text-gray-700 placeholder:text-gray-400 focus:outline-none font-medium text-lg rounded-[3rem]"
          aria-label="Text input for symptoms"
        />
        
        <button className="flex-shrink-0 bg-nature-moss text-white p-4 rounded-full hover:bg-nature-sage transition-colors duration-300 shadow-[0_4px_10px_rgba(74,107,70,0.3)] hover:shadow-[0_6px_15px_rgba(158,186,156,0.5)] active:scale-95 group-focus-within:bg-nature-sage mr-1 ml-2">
          <Send className="w-5 h-5 ml-0.5" />
        </button>

      </div>
      
      <p className="text-center text-sm text-nature-moss/60 mt-4 font-medium px-4">
        We understand <span className="font-bold">Hindi (हिंदी)</span>, English, and local dialects.
      </p>
    </motion.div>
  );
}
