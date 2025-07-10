import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { RefreshCw, Lock, GitBranch, Flag, TrendingUp, Filter } from "lucide-react";

const syncFeatures = [
  {
    icon: RefreshCw,
    title: "Two-way synchronization",
    description: "Integrate your task tracker with GitHub to sync changes instantly.",
    delay: 0.1
  },
  {
    icon: Lock,
    title: "Private tasks",
    description: "Integration and management of multiple data repositories effectively.",
    delay: 0.2
  },
  {
    icon: GitBranch,
    title: "Multiple repositories",
    description: "Organize multiple projects for more effective planning and collaboration.",
    delay: 0.3
  },
  {
    icon: Flag,
    title: "Milestone migration",
    description: "Seamless migration of key project milestones between repositories.",
    delay: 0.4
  },
  {
    icon: TrendingUp,
    title: "Track progress",
    description: "Keep track of GitHub contributions and changes within your workspace.",
    delay: 0.5
  },
  {
    icon: Filter,
    title: "Advanced filtering",
    description: "Precise project data search with advanced filtering capabilities.",
    delay: 0.6
  }
];

export function GitHubSyncSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 warm-gradient-bg relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-96 h-96 bg-electric-blue opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-glow opacity-8 rounded-full blur-3xl" />
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
              Sync with GitHub.
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-purple-glow bg-clip-text text-transparent">
                Both ways.
              </span>
            </h2>
          </div>
          <motion.p 
            className="text-xl medium-dark-text max-w-4xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Manage your tasks efficiently with Huly's bidirectional GitHub synchronization. Use Huly as an advanced front-end for GitHub Issues and GitHub Projects.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {syncFeatures.map((feature, index) => (
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
              className="glass-effect rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-purple-glow/30 transition-all duration-500 interactive-card glow-border magnetic-hover"
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-electric-blue to-purple-glow rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-purple-glow rounded-2xl blur-lg opacity-50 -z-10" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 dark-text">{feature.title}</h3>
              <p className="medium-dark-text leading-relaxed text-lg">{feature.description}</p>
              
              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-glow rounded-full opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
