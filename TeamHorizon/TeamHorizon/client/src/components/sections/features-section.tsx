import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Keyboard, Calendar, Bell, Clock, CheckSquare, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Keyboard,
    title: "Keyboard shortcuts",
    description: "Work efficiently with instant access to common actions.",
    delay: 0.1
  },
  {
    icon: Calendar,
    title: "Team Planner",
    description: "Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.",
    delay: 0.2
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Keep up to date with any changes by receiving instant notifications.",
    delay: 0.3
  },
  {
    icon: Clock,
    title: "Time-blocking",
    description: "Transform daily tasks into structured time blocks for focused productivity.",
    delay: 0.4
  },
  {
    icon: CheckSquare,
    title: "Project Management",
    description: "Organize and track projects with powerful management tools designed for teams.",
    delay: 0.5
  },
  {
    icon: MessageCircle,
    title: "Virtual Office",
    description: "Create customized virtual office spaces for any department or event with high quality audio and video conferencing.",
    delay: 0.6
  }
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-32 warm-gradient-bg relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-glow opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-blue opacity-5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="cursor-reveal inline-block"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 warm-section-text">
              Everything you need for
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-purple-glow bg-clip-text text-transparent">
                productive team work
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl medium-dark-text max-w-3xl mx-auto font-medium"
          >
            Powerful features designed to enhance collaboration and boost productivity
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="feature-card glass-effect rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-glow/30 transition-all duration-500 interactive-card glow-border magnetic-hover"
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-electric-blue to-purple-glow rounded-2xl flex items-center justify-center mb-6 relative"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-purple-glow rounded-2xl blur-lg opacity-50 -z-10" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 dark-text">{feature.title}</h3>
              <p className="medium-dark-text leading-relaxed text-lg">{feature.description}</p>
              
              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-electric-blue rounded-full opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
