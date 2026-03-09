"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="pb-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
        Selected work
      </p>
      <div>
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex items-baseline gap-4 md:gap-6 py-5 border-b border-[#1A1A1A] transition-colors"
          >
            <span className="font-mono text-xs text-muted shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <span className="text-foreground font-medium transition-all duration-200 group-hover:translate-x-2 group-hover:text-accent inline-block">
                {project.title}
              </span>
              <span className="text-muted text-sm hidden sm:inline ml-3">
                {project.description}
              </span>
              <p className="text-muted text-sm mt-1 sm:hidden">
                {project.description}
              </p>
            </div>
            <span className="font-mono text-xs text-muted hidden md:block shrink-0">
              {project.tech.join(" / ")}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
