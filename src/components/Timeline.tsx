import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

interface Experience {
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string[];
  type: "work" | "award" | "education";
}

const experiences: Experience[] = [
  {
    title: "Quantitative Researcher",
    organization: "Financial Engineering Club",
    location: "Champaign, IL",
    date: "Aug 2025 - Present",
    description: [
      "Developed ML models for implied volatility prediction achieving R² = 0.814 with 3175× faster inference than Black-Scholes",
      "Earned Best Poster and Best Project Awards for exceptional research quality and presentation",
      "Delivered findings to Financial Engineering directors and experts, showcasing technical depth and communication skills",
    ],
    type: "award",
  },
  {
    title: "CS/Physics Researcher",
    organization: "Wolfram Emerging Leaders Program",
    location: "Remote",
    date: "Aug 2024 - Jan 2025",
    description: [
      "Collaborated with CS experts and peers to analyze and model optimal fluid dynamics of skipping rocks on water",
      "Created a graphical simulation in Wolfram Language with adjustable parameters (mass, velocity, tilt angle)",
      "Developed real-time visualization showing how parameter changes affect the number of stone skips",
    ],
    type: "work",
  },
  {
    title: "Research Intern",
    organization: "Wolfram Summer Research Program",
    location: "Boston, MA",
    date: "June 2024 - Aug 2024",
    description: [
      "Designed computer vision edge detection algorithm to generate puzzles in a fast-paced setting",
      "Refined research through cross-functional collaboration and iterative feedback with CS experts",
      "Presented research to hundreds, including Stephen Wolfram, demonstrating communication skills",
    ],
    type: "work",
  },
  {
    title: "Crew Member",
    organization: "Robeks Juice",
    location: "Naperville, IL",
    date: "April 2024 - Aug 2025",
    description: [
      "Delivered high-quality customer service and managed register operations efficiently",
      "Prepared delicious smoothies and fresh juice beverages for customers",
      "Maintained inventory through fruit and vegetable backup preparation",
    ],
    type: "work",
  },
  {
    title: "International M3 Modeling Challenge",
    organization: "Honorable Mention (Top 3% of 650 teams)",
    location: "Naperville, IL",
    date: "March 2024",
    description: [
      "Collaborated in a diverse team to build predictive ML models with Python, Pandas, and SKLearn",
      "Created data visualizations from group data with Matplotlib and co-authored a technical paper",
      "Recognized with Honorable Mention (22/650 worldwide) for analytical and problem-solving skills",
    ],
    type: "award",
  },
  {
    title: "BS in Computer Science",
    organization: "University of Illinois Urbana-Champaign",
    location: "Champaign, IL",
    date: "Expected May 2028",
    description: [
      "GPA: 4.00/4.00",
      "Deep Learning Specialization - Stanford University",
      "Machine Learning Specialization - Stanford University",
      "CS50X: Introduction to Computer Science - Harvard University",
    ],
    type: "education",
  },
];

const getIcon = (type: Experience["type"]) => {
  switch (type) {
    case "work":
      return Briefcase;
    case "award":
      return Award;
    case "education":
      return GraduationCap;
  }
};

const Timeline = () => {
  return (
    <section id="experience" className="bg-background">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type);
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={`${exp.title}-${index}`}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full glow-orange z-10" />
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 card-glow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon size={20} />
                      </div>
                      <span className="text-sm font-mono text-primary">{exp.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium mb-1">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;