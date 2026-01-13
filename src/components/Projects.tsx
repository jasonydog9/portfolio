import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "SpeechQB",
    description: "150,000+ questions read. AI voice reader for QuizBowl practice.",
    link: "https://github.com/jasonydog9/SpeechQBPublic",
    tags: ["Python", "AI", "Speech Synthesis"],
  },
  {
    title: "Chordly",
    description: "Interactive web app for learning chord progressions through games.",
    link: "https://github.com/jasonydog9/chordly",
    tags: ["React", "JavaScript", "Web Audio API"],
  },
  {
    title: "Fluid Dynamics Simulation",
    description: "Physics simulation for optimal rock skipping configurations.",
    link: "https://community.wolfram.com/groups/-/m/t/3398425",
    tags: ["Wolfram", "Physics", "Simulation"],
  },
  {
    title: "Jigsaw Puzzles",
    description: "Computer vision algorithm for recognizable puzzle pieces.",
    link: "https://community.wolfram.com/groups/-/m/t/3214617",
    tags: ["Computer Vision", "Image Processing", "Wolfram"],
  },
  {
    title: "Brighter Days",
    description: "3rd Place at FremdHacks. Mental health journaling platform.",
    link: "https://github.com/jasonydog9/FremdHacks2024",
    tags: ["React", "Firebase", "Hackathon"],
  },
  {
    title: "C$50 Crypto Simulator",
    description: "Real-time cryptocurrency trading simulator with Flask and Python.",
    link: "https://github.com/jasonydog9/CS50X-Final-Project",
    tags: ["Flask", "Python", "API"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/20">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Projects
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              variants={item}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 card-glow block"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Folder size={24} />
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  {project.link.includes("github") && (
                    <Github size={20} className="hover:text-primary transition-colors" />
                  )}
                  <ExternalLink size={20} className="group-hover:text-primary transition-colors" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;