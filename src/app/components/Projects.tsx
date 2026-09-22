import { motion } from "motion/react";
import { Github, Smartphone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "ForFood",
      subtitle: "Solo Flutter Developer · Jul 2026 – Present",
      description:
        "Two-sided food-delivery marketplace built end-to-end in Flutter for Android and iOS. Diners search by craving, budget, and location; restaurants manage menus and fulfill orders in real time.",
      highlights: [
        "Budget-first search using a custom geohash encoder and 3×3 neighbour grid.",
        "Full order lifecycle with real-time in-app chat and push notifications.",
        "RevenueCat subscriptions with entitlement-based feature gating.",
        "130+ Dart files, 12 BLoCs, single-repository data layer.",
        "Trilingual UI (EN / AR / FR) with responsive layout.",
        "Firebase Security Rules for role-based access control.",
      ],
      tech: ["Flutter", "Dart", "BLoC", "Firebase", "RevenueCat", "SQLite"],
      github: "https://github.com/lanaxadev-coder/ForFood",
      badge: "Shipaton 2026 · Next Gen Award",
      // Banner image — replace with your own screenshot later
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop",
      color: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected work — built and shipped end-to-end.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Banner image */}
              <div className="relative h-56 overflow-hidden bg-gray-700">
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                {/* Top-right badge icon */}
                <div
                  className={`absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r ${project.color}`}
                >
                  <Smartphone className="text-white" size={20} />
                </div>

                {/* Bottom-left Shipaton chip */}
                <span className="absolute bottom-4 left-4 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/30 text-purple-100 backdrop-blur-sm border border-purple-400/40">
                  {project.badge}
                </span>
              </div>

              {/* Card content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 text-sm"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-900 text-gray-300 rounded-full border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-shadow"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}