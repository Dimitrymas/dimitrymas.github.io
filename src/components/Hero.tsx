"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] z-[-1]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#FED7AA]/40 blur-[120px] z-[-1]" />

      <div className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-sm mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground"
        >
          Landerix
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted mb-8"
        >
          Fullstack Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted max-w-lg mx-auto mb-10 leading-relaxed"
        >
          I build backend-focused fullstack applications with Python &
          TypeScript. From logic to deployment — I ship end to end.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://github.com/lander1x"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent text-accent hover:bg-accent/10 rounded-full font-medium transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
