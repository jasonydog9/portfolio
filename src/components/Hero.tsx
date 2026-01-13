import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="gradient-text">Jason Yap</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground"
          >
            Computer Science Student @ UIUC
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-muted-foreground text-lg"
          >
            Passionate about building full-stack applications, machine learning, and solving complex problems through code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#"
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
              href="https://linkedin.com/in/jasonyap"
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
        </motion.div>
      </div>
      
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;