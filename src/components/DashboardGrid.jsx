import { Activity, MapPin, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const defaultCards = [
  {
    id: 'symptoms',
    title: 'Check Symptoms',
    description: 'AI-assisted analysis of your health concerns',
    icon: Activity,
    color: 'bg-nature-sage/20',
    iconColor: 'text-nature-moss',
    hoverColor: 'hover:bg-nature-sage/30',
  },
  {
    id: 'doctor',
    title: 'Find Nearby Doctor',
    description: 'Locate specialists and clinics in your area',
    icon: MapPin,
    color: 'bg-nature-gold/20',
    iconColor: 'text-yellow-800',
    hoverColor: 'hover:bg-nature-gold/30',
  },
  {
    id: 'mental-health',
    title: 'Mental Health Diary',
    description: 'Track your mood and daily reflections',
    icon: Heart,
    color: 'bg-nature-peach/20',
    iconColor: 'text-nature-coral',
    hoverColor: 'hover:bg-nature-peach/30',
  },
  {
    id: 'reminders',
    title: 'Medicine Reminders',
    description: 'Never miss a dose with timely alerts',
    icon: Clock,
    color: 'bg-nature-lavender/20',
    iconColor: 'text-purple-800',
    hoverColor: 'hover:bg-nature-lavender/30',
  }
];

export default function DashboardGrid() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {defaultCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: "-50px" }}
              className={`p-8 rounded-[3rem] ${card.color} ${card.hoverColor} transition-all duration-700 ease-in-out cursor-pointer group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-start`}
            >
              <div className={`p-4 rounded-3xl bg-white/60 mb-6 group-hover:scale-110 transition-transform duration-500 ease-in-out`}>
                <Icon className={`w-8 h-8 ${card.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-sans tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
