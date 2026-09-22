import { motion } from "motion/react";
import { Code2, Rocket, Lightbulb } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Maintainable, testable code following Clean Architecture and the repository pattern.",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description:
        "Smooth 60fps UI, optimized rendering, and minimal widget rebuilds.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "Built a custom geohash encoder from scratch for spatial search — no external package.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a Flutter developer and Artificial
              Intelligence engineering student at ENSIA (École
              Nationale Supérieure d'Informatique, Algiers). I
              build mobile apps end-to-end — from UI design to
              Firebase backend to deployment.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My flagship project is ForFood, a two-sided
              food-delivery marketplace built solo in Flutter
              for Android and iOS, submitted to the RevenueCat
              Shipaton 2026. I am currently seeking a 45-day
              stage at CDTA focused on healthcare mobile apps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <feature.icon
                  className="text-blue-400 mb-4"
                  size={40}
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}