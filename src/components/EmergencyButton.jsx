import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmergencyButton() {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      initial={{ opacity: 0, y: 50, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1], // Custom slow ease-out
        delay: 0.5 
      }}
    >
      <button className="relative group flex items-center gap-3 bg-nature-coral hover:bg-[#d66e66] text-white px-5 py-4 rounded-full shadow-[0_10px_25px_rgba(231,128,119,0.4)] hover:shadow-[0_15px_35px_rgba(231,128,119,0.5)] transition-all duration-500 ease-in-out">
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <Phone className="w-6 h-6" />
        <span className="font-bold tracking-wide pr-2">Emergency</span>
      </button>
    </motion.div>
  );
}
