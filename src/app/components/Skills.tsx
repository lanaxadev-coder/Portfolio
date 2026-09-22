import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Mobile",
      skills: [
        "Flutter",
        "Dart",
        "Android",
        "iOS",
        "BLoC",
        "Provider",
        "Material Design",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend & Data",
      skills: [
        "Firebase Auth",
        "Firestore",
        "Cloud Messaging",
        "REST APIs",
        "SQLite",
        "RevenueCat",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Design & Tools",
      skills: [
        "Figma",
        "Wireframing",
        "Clean Architecture",
        "Git & GitHub",
        "VS Code",
        "Android Studio",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700"
            >
              <div
                className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold mb-6`}
              >
                {category.title}
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay:
                        categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}