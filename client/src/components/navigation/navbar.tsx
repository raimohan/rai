import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 magnetic-hover"
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-electric-blue to-purple-glow rounded-xl flex items-center justify-center font-black text-xl relative"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              H
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-purple-glow rounded-xl blur-lg opacity-50 -z-10" />
            </motion.div>
            <span className="text-3xl font-black bg-gradient-to-r from-electric-blue to-purple-glow bg-clip-text text-transparent">
              Huly
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-10"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group text-lg font-semibold magnetic-hover"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-purple-glow transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </motion.div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pt-4 pb-6 space-y-4 glass-effect border-t border-white/10">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
