"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-32">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-foreground"
      >
        Landerix
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-muted text-lg max-w-[480px] leading-relaxed mb-6"
      >
        Backend engineer building distributed systems in Go, Python, and
        TypeScript.
      </motion.p>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        href="https://github.com/lander1x"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-sm text-muted underline underline-offset-4 hover:text-accent transition-colors"
      >
        github.com/lander1x
      </motion.a>
    </section>
  );
}
