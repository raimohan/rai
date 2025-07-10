import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, History, Bold, Italic, Underline, Link, AtSign, Highlighter, MoreHorizontal, Share, Check } from "lucide-react";

const collaborationFeatures = [
  {
    icon: Users,
    title: "Collaborate",
    description: "Enhance teamwork with powerful real-time collaboration features."
  },
  {
    icon: History,
    title: "Version History",
    description: "Track every edit effortlessly, and never lose a single change."
  }
];

export function KnowledgeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 warm-gradient-bg relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-10 w-96 h-96 bg-electric-blue opacity-8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-16 w-80 h-80 bg-purple-glow opacity-5 rounded-full blur-3xl" />
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
              Knowledge at
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-purple-glow bg-clip-text text-transparent">
                Your Fingertips
              </span>
            </h2>
          </div>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Huly offers a wide range of features to create and manage your project documentation. Huly's suite of collaborative editing tools boosts team efficiency.
          </motion.p>
        </motion.div>
        
        {/* Document Editor Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass-effect rounded-3xl p-8 max-w-5xl mx-auto">
            <div className="bg-dark-primary rounded-2xl">
              {/* Editor Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <h3 className="font-semibold">Team Documentation</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-gray-400">Auto-saved</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-electric-blue rounded hover:bg-blue-600 transition-colors">
                    <Share className="h-4 w-4 inline mr-1" />
                    Share
                  </button>
                  <button className="px-3 py-1 text-sm glass-effect rounded hover:bg-white/20 transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Editor Toolbar */}
              <div className="flex items-center space-x-1 p-4 border-b border-gray-700">
                <button className="p-2 rounded hover:bg-white/10 transition-colors" title="Bold">
                  <Bold className="h-4 w-4" />
                </button>
                <button className="p-2 rounded hover:bg-white/10 transition-colors" title="Italic">
                  <Italic className="h-4 w-4" />
                </button>
                <button className="p-2 rounded hover:bg-white/10 transition-colors" title="Underline">
                  <Underline className="h-4 w-4" />
                </button>
                <div className="w-px h-6 bg-gray-600 mx-2" />
                <button className="p-2 rounded hover:bg-white/10 transition-colors" title="Link">
                  <Link className="h-4 w-4" />
                </button>
                <button className="p-2 rounded hover:bg-white/10 transition-colors" title="Mention">
                  <AtSign className="h-4 w-4" />
                </button>
                <button className="p-2 rounded hover:bg-white/10 transition-colors" title="Highlight">
                  <Highlighter className="h-4 w-4" />
                </button>
              </div>
              
              {/* Editor Content */}
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Project Roadmap Q1 2024</h1>
                
                <p className="text-gray-300 mb-4">
                  Documents in Huly can be used for sharing reference materials among team members, 
                  collaborating on plans and roadmaps, storing meeting notes and assigning action items.
                </p>
                
                <div className="glass-effect rounded-xl p-4 mb-4">
                  <h3 className="font-semibold mb-2">🎯 Key Objectives</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Launch new collaboration features</li>
                    <li>• Improve user onboarding experience</li>
                    <li>• Enhance mobile application</li>
                  </ul>
                </div>
                
                <p className="text-gray-300">
                  With <span className="bg-electric-blue/20 px-1 rounded">live real-time collaboration</span>, 
                  remote teams are able to work together to bring a unified vision to life on the page.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {collaborationFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center glass-effect rounded-3xl p-10 magnetic-hover interactive-card glow-border"
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-electric-blue to-purple-glow rounded-3xl flex items-center justify-center mx-auto mb-8 relative"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="h-12 w-12 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-purple-glow rounded-3xl blur-xl opacity-50 -z-10" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-6 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
              
              {/* Decorative corner element */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-electric-blue rounded-full opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
