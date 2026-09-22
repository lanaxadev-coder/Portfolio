import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import profilePhoto from "../../imports/profile.jpg";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="container mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section — profile photo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <img
                src={profilePhoto}
                alt="Ritadj Zekkour"
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h1 className="text-xl font-bold text-white">Ritadj Zekkour</h1>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  Flutter Developer <span>🚀</span>
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-gray-900/98 backdrop-blur-sm border-b border-gray-800 md:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    onClick={handleLinkClick}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-white transition-colors font-medium py-2 px-4 hover:bg-gray-800 rounded-lg"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}