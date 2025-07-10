import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { SiSlack } from "react-icons/si";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 warm-gradient-bg relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-glow opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-electric-blue opacity-8 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="hero-glow-effect"
        >
          <div className="cursor-reveal inline-block">
            <h2 className="text-5xl md:text-8xl font-black mb-8 hero-gradient-text">
              <span className="bg-gradient-to-r from-electric-blue to-purple-glow bg-clip-text text-transparent">
                Join the Movement
              </span>
            </h2>
          </div>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Unlock the future of productivity with Huly.
          </motion.p>
          <motion.p 
            className="text-xl text-gray-400 mb-16 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Remember, this journey is just getting started.
          </motion.p>
          
          <motion.div 
            className="space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="magnetic-hover glow-button bg-gradient-to-r from-electric-blue to-purple-glow px-12 py-6 text-xl font-bold hover:shadow-2xl hover:shadow-purple-glow/50 transition-all duration-500 w-full sm:w-auto rounded-2xl"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Start now
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="magnetic-hover glass-effect border-white/30 px-12 py-6 text-xl font-bold hover:bg-white/20 transition-all duration-500 w-full sm:w-auto rounded-2xl"
            >
              <SiSlack className="mr-3 h-6 w-6" />
              Join our Slack
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Background Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-16"
        >
          <div className="relative h-64 overflow-hidden rounded-3xl glass-effect">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-purple-glow/20" />
            
            {/* Floating workspace elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 left-8 w-16 h-16 bg-electric-blue/30 rounded-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-12 right-12 w-12 h-12 bg-purple-glow/40 rounded-lg"
            />
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute bottom-12 left-16 w-14 h-14 bg-electric-blue/25 rounded-xl"
            />
            <motion.div
              animate={{ y: [15, -5, 15] }}
              transition={{ duration: 4, repeat: Infinity, delay: 3 }}
              className="absolute bottom-8 right-8 w-10 h-10 bg-purple-glow/35 rounded-lg"
            />
            
            {/* Central glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-electric-blue to-purple-glow rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
