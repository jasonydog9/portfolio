import { motion } from "framer-motion";
import { Code2, Globe, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Proficient in multiple programming languages with strong foundation in data structures, algorithms, and object-oriented programming.",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Full Stack Development",
    icon: Globe,
    description: "Experience building full-stack applications with modern frameworks and databases. Skilled in creating RESTful APIs and deploying scalable solutions.",
    skills: ["React", "Node.js", "Express", "Flask", "MongoDB", "SQLite", "Firebase", "Git"],
  },
  {
    title: "Machine Learning & Data Science",
    icon: Brain,
    description: "Applied ML experience with neural networks, ensemble methods, and deep learning frameworks. Skilled in data processing and model deployment.",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "AWS", "Google Cloud"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary/20">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Expertise
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-card border border-border rounded-xl p-6 card-glow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-mono text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;