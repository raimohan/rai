import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Video, UserPlus, Mic, MonitorSpeaker, Phone } from "lucide-react";

const teamMembers = [
  { name: "Craig Press", initials: "CP", gradient: "from-blue-500 to-purple-600", online: true },
  { name: "Makenna Bergson", initials: "MB", gradient: "from-pink-500 to-red-600", online: true },
  { name: "Allison Septimus", initials: "AS", gradient: "from-green-500 to-teal-600", online: true },
  { name: "Join Meeting", initials: "+", gradient: "from-gray-600 to-gray-700", online: false }
];

const officeFeatures = [
  {
    icon: Settings,
    title: "Customize workspace",
    description: "Create your own offices and meeting rooms to suit your team's needs."
  },
  {
    icon: Video,
    title: "Audio and video calls", 
    description: "Collaborate efficiently and seamlessly with high quality virtual conferencing."
  },
  {
    icon: UserPlus,
    title: "Invite guests",
    description: "Meet with guests without ever needing to leave your workspace."
  }
];

export function WorkTogetherSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 warm-gradient-bg relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-electric-blue opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-16 w-64 h-64 bg-purple-glow opacity-8 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="cursor-reveal inline-block">
            <h2 className="text-5xl md:text-7xl font-black mb-8 warm-section-text">
              Work together.
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-purple-glow bg-clip-text text-transparent">
                Like in the office.
              </span>
            </h2>
          </div>
          <motion.p 
            className="text-xl medium-dark-text max-w-4xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Create customized virtual office spaces for any department or event with high quality audio and video conferencing.
          </motion.p>
        </motion.div>
        
        {/* Virtual Office Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16"
        >
          <div className="glass-effect rounded-3xl p-8 max-w-5xl mx-auto">
            <div className="bg-dark-primary rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Onboarding Meeting</h3>
                <span className="text-sm text-gray-400">4 participants</span>
              </div>
              
              {/* Virtual Office Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={`glass-effect rounded-xl p-4 text-center ${!member.online ? 'opacity-50' : ''}`}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold`}>
                      {member.initials}
                    </div>
                    <p className="text-sm font-medium">{member.name}</p>
                    {member.online && (
                      <div className="flex justify-center mt-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Office Controls */}
              <div className="flex justify-center space-x-4">
                <button className="glass-effect rounded-full p-3 hover:bg-white/20 transition-colors">
                  <Mic className="h-5 w-5 text-green-500" />
                </button>
                <button className="glass-effect rounded-full p-3 hover:bg-white/20 transition-colors">
                  <Video className="h-5 w-5 text-blue-500" />
                </button>
                <button className="glass-effect rounded-full p-3 hover:bg-white/20 transition-colors">
                  <MonitorSpeaker className="h-5 w-5 text-purple-500" />
                </button>
                <button className="bg-red-500 rounded-full p-3 hover:bg-red-600 transition-colors">
                  <Phone className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {officeFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center glass-effect rounded-3xl p-8 magnetic-hover interactive-card"
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-electric-blue to-purple-glow rounded-3xl flex items-center justify-center mx-auto mb-6 relative"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="h-12 w-12 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-purple-glow rounded-3xl blur-xl opacity-50 -z-10" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 dark-text">{feature.title}</h3>
              <p className="medium-dark-text leading-relaxed text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
