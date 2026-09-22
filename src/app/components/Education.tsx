import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      title: "Engineering Degree in Artificial Intelligence",
      organization:
        "École Nationale Supérieure d'Informatique (ENSIA) — Algiers",
      period: "2025 – 2030 (expected)",
      description:
        "Relevant coursework: Algorithms, Data Structures, Databases, Software Engineering, Networks, Mobile Development, Security.",
      skills: [
        "Artificial Intelligence",
        "Mobile Development",
        "Algorithms",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap
              className="text-purple-400"
              size={28}
            />
            <h3 className="text-2xl font-semibold text-white">
              Academic Background
            </h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-purple-400">
                      {edu.organization}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  {edu.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}