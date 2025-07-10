import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-3d-bg overflow-hidden">
      {/* CSS Particle Field */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary opacity-80" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-glow opacity-20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue opacity-15 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Main light beam effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-purple-glow to-transparent opacity-60 beam-animation" />
      
      {/* Floating UI Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 glass-effect rounded-2xl flex items-center justify-center floating-icon"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Rocket className="h-8 w-8 text-electric-blue" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-16 w-16 h-16 glass-effect rounded-xl flex items-center justify-center floating-icon"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-purple-glow to-electric-blue rounded-lg" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 w-12 h-12 glass-effect rounded-full flex items-center justify-center floating-icon"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-6 h-6 bg-electric-blue rounded-full opacity-80" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-glow-effect"
        >
          <div className="cursor-reveal">
            <h1 className="text-6xl md:text-8xl lg:text-9xl hero-gradient-text mb-8 leading-tight">
              Everything App
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-purple-glow bg-clip-text text-transparent">
                for your teams
              </span>
              <span className="typing-cursor"></span>
            </h1>
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-reveal font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <Button
              size="lg"
              className="magnetic-hover glow-button bg-gradient-to-r from-electric-blue to-purple-glow px-12 py-6 text-xl font-bold hover:shadow-2xl hover:shadow-purple-glow/50 transition-all duration-500 rounded-2xl"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Try it Free
            </Button>
          </motion.div>
        </motion.div>
        
        {/* App Preview with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          className="mt-20"
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-electric-blue to-purple-glow rounded-2xl opacity-80"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-glow to-electric-blue rounded-xl opacity-60"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            {/* Main App Preview */}
            <div className="glass-effect rounded-3xl p-8 animate-glow-pulse magnetic-hover">
              <div className="bg-dark-secondary rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                    <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Huly Workspace</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Tracker Section */}
                  <motion.div 
                    className="bg-dark-primary rounded-xl p-6 border border-gray-700/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold">Tracker</h3>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      <div className="bg-electric-blue/20 rounded-lg p-3 text-sm font-medium border border-electric-blue/30">
                        ✓ Set up team meeting
                      </div>
                      <div className="bg-purple-glow/20 rounded-lg p-3 text-sm font-medium border border-purple-glow/30">
                        ⏳ Review documentation
                      </div>
                      <div className="bg-green-500/20 rounded-lg p-3 text-sm font-medium border border-green-500/30">
                        🔄 Update project status
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Issues Section */}
                  <motion.div 
                    className="bg-dark-primary rounded-xl p-6 border border-gray-700/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold">Issues</h3>
                      <div className="bg-electric-blue/20 px-2 py-1 rounded-md text-xs font-medium">22</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">🐛 Bug fixes</span>
                        <span className="text-red-400 font-bold">3</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">🚀 Features</span>
                        <span className="text-blue-400 font-bold">7</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">📋 To Do</span>
                        <span className="text-purple-400 font-bold">12</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Inbox Section */}
                  <motion.div 
                    className="bg-dark-primary rounded-xl p-6 border border-gray-700/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold">Inbox</h3>
                      <div className="bg-red-500/20 px-2 py-1 rounded-md text-xs font-medium text-red-400">5</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-gray-300">💬 Team updates</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <span className="text-gray-300">📧 Notifications</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-gray-300">🔔 Mentions</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
