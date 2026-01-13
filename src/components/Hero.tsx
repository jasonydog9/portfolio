import { motion, type Easing } from "framer-motion";
import { Github, Linkedin, FileText, Mail, ChevronDown } from "lucide-react";

const nameLetters = "Jason Yap".split("");

const cubicBezier: Easing = [0.215, 0.61, 0.355, 1];

const letterVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.08,
      duration: 0.6,
      ease: cubicBezier,
    },
  }),
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.8,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 1.2,
      ease: "easeOut" as Easing,
    },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      
      {/* Animated glow behind name */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative shrink-0"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/50 glow-orange">
              <img
                src="/profile-photo.jpg"
                alt="Jason Yap"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="absolute inset-0 rounded-full border-2 border-primary/20 -m-3"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute inset-0 rounded-full border border-primary/10 -m-6"
            />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-primary font-mono text-sm md:text-base"
            >
              Hi, my name is
            </motion.p>
            
            {/* Animated Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold perspective-1000">
              <span className="inline-block">
                {nameLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block gradient-text ${letter === " " ? "w-4 md:w-6" : ""}`}
                    style={{ 
                      textShadow: "0 0 40px hsl(25 95% 53% / 0.5)",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground"
            >
              Computer Science Student @ UIUC
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="max-w-xl text-muted-foreground text-lg mx-auto lg:mx-0"
            >
              Passionate about building full-stack applications, machine learning, and solving complex problems through code.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <a
                href="/Jason-Yap Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all glow-orange"
              >
                <FileText size={18} />
                Resume
              </a>
              <a
                href="https://github.com/jasonydog9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jason-yap-71b20a253/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-muted-foreground/30 text-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="mailto:jason.yap0@gmail.com"
                className="flex items-center gap-2 px-6 py-3 border border-muted-foreground/30 text-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-all"
              >
                <Mail size={18} />
                Email
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;