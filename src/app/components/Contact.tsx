import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ritadj.zekkour@ensia.edu.dz",
      href: "mailto:ritadj.zekkour@ensia.edu.dz",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@lanaxadev-coder",
      href: "https://github.com/lanaxadev-coder",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ritadj-zekkour",
      href: "https://linkedin.com/in/ritadj-zekkour",
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Open to Flutter roles, freelance work, and
            collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center group"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <method.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {method.label}
              </h3>
              <p className="text-gray-400 text-sm break-all">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            I'm always open to discussing new projects, creative
            ideas, or opportunities.
          </p>
          <motion.button
            onClick={() => {
              toast.success("Opening Gmail!", {
                description:
                  "Gmail will open to send an email to ritadj.zekkour@ensia.edu.dz",
                duration: 3000,
              });
              setTimeout(() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=ritadj.zekkour@ensia.edu.dz",
                  "_blank",
                );
              }, 500);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
          >
            <Mail size={20} />
            Send Me an Email
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}