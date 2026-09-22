import { motion } from "motion/react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <div className="text-center md:text-left">
            <div className="mb-4">
              <span className="text-blue-400 text-lg">
                Hi, I'm
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Ritadj Zekkour
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <h2 className="text-2xl md:text-4xl text-gray-300">
                Flutter Developer & UI/UX Designer
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mb-8">
              I build clean, high-performance mobile apps with
              Flutter — from architecture to shipping. Currently
              studying AI Engineering at ENSIA, Algiers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
            <div className="flex gap-6 justify-center md:justify-start">
              <motion.a
                href="https://github.com/lanaxadev-coder"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ritadj-zekkour"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="mailto:ritadj.zekkour@ensia.edu.dz"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={28} />
              </motion.a>
            </div>
          </div>

          {/* RZ Avatar circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-4 border-blue-500/50 shadow-2xl">
                <span className="text-white font-bold text-8xl md:text-9xl tracking-wider">
                  RZ
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-blue-400" size={32} />
      </motion.div>
    </section>
  );
}