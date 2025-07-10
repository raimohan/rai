import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckSquare, Calendar, StickyNote, Users, Folder, Brain, Lightbulb, FileText, Code, MessageSquare } from "lucide-react";

const metaFeatures = [
  {
    icon: CheckSquare,
    title: "Create tasks",
    description: "Schedule your personal events and todos."
  },
  {
    icon: Calendar,
    title: "Plan your work",
    description: "Visualize your workday in your planner."
  },
  {
    icon: StickyNote,
    title: "Take notes",
    description: "Create documents to keep track of team resources."
  },
  {
    icon: Users,
    title: "Chat with team",
    description: "Send DM and create group chats."
  },
  {
    icon: Folder,
    title: "Manage projects",
    description: "Customize your workspace to fit the needs of your teams."
  }
];

const knowledgeCategories = [
  { icon: Lightbulb, label: "Ideas", color: "text-yellow-500" },
  { icon: FileText, label: "Docs", color: "text-blue-500" },
  { icon: Code, label: "Code", color: "text-green-500" },
  { icon: MessageSquare, label: "Chats", color: "text-purple-500" }
];

export function MetaBrainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 warm-gradient-bg relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-80 h-80 bg-purple-glow opacity-8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-electric-blue opacity-10 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="cursor-reveal inline-block">
            <h2 className="text-5xl md:text-7xl font-black mb-8 hero-gradient-text">
              <span className="bg-gradient-to-r from-electric-blue to-purple-glow bg-clip-text text-transparent">
                Huly MetaBrain
              </span>
            </h2>
          </div>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Connect every element of your workflow to build a dynamic knowledge base. Soon, Huly AI will turn it into a powerful asset — a second brain for your team.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Features */}
          <div className="space-y-10">
            {metaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start space-x-6 glass-effect rounded-2xl p-6 interactive-card magnetic-hover"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-electric-blue to-purple-glow rounded-2xl flex items-center justify-center flex-shrink-0 relative"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-purple-glow rounded-2xl blur-lg opacity-50 -z-10" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column - AI Brain Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="magnetic-hover"
          >
            <div className="glass-effect rounded-3xl p-10 glow-border interactive-card">
              <div className="bg-dark-secondary rounded-3xl p-8 text-center relative overflow-hidden">
                {/* AI Brain Visualization */}
                <div className="relative mb-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 20px rgba(139, 92, 246, 0.3)",
                        "0 0 40px rgba(139, 92, 246, 0.6)",
                        "0 0 20px rgba(139, 92, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 bg-gradient-to-br from-electric-blue to-purple-glow rounded-full mx-auto flex items-center justify-center"
                  >
                    <Brain className="h-16 w-16 text-white" />
                  </motion.div>
                  
                  {/* Floating connection nodes */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-0 left-1/4 w-4 h-4 bg-electric-blue rounded-full"
                  />
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute top-1/4 right-0 w-3 h-3 bg-purple-glow rounded-full"
                  />
                  <motion.div
                    animate={{ y: [-5, 15, -5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 left-0 w-3 h-3 bg-electric-blue rounded-full"
                  />
                  <motion.div
                    animate={{ y: [15, -5, 15] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 3 }}
                    className="absolute bottom-0 right-1/4 w-4 h-4 bg-purple-glow rounded-full"
                  />
                </div>
                
                <h3 className="text-3xl font-bold mb-6 text-white">Your Team's MetaBrain</h3>
                <p className="text-gray-300 mb-8 text-lg font-medium">AI-powered knowledge base connecting all your team's work</p>
                
                {/* Knowledge Categories */}
                <div className="grid grid-cols-2 gap-6">
                  {knowledgeCategories.map((category, index) => (
                    <motion.div
                      key={category.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-effect rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 magnetic-hover"
                    >
                      <category.icon className={`h-8 w-8 ${category.color} mb-3 mx-auto`} />
                      <p className="text-lg font-semibold text-white">{category.label}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-blue/5 to-purple-glow/5 rounded-3xl pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
