import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface Course {
  name: string;
  tag?: string;
}

const courses: Course[] = [
  { name: "Calculus III" },
  { name: "Linear Algebra" },
  { name: "Intro to CS I", tag: "Java" },
  { name: "Intro to CS II", tag: "C++" },
  { name: "Discrete Structures" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

const Coursework = () => {
  return (
    <section id="coursework" className="bg-background">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Relevant Coursework
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {courses.map((course) => (
            <motion.div
              key={course.name}
              variants={item}
              className="bg-card border border-border rounded-xl px-6 py-4 card-glow flex items-center gap-3"
            >
              <BookOpen size={20} className="text-primary" />
              <span className="font-medium">{course.name}</span>
              {course.tag && (
                <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-mono">
                  {course.tag}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Coursework;