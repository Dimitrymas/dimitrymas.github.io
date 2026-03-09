"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="pb-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
        About
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[560px]"
      >
        <p className="text-muted text-[15px] leading-relaxed mb-4">
          Backend engineer with a focus on Go, Python, and TypeScript. I build
          enterprise-grade microservice architectures — from gRPC contracts and
          event-driven pipelines to Kubernetes deployments.
        </p>
        <p className="text-muted text-[15px] leading-relaxed">
          I ship end-to-end: Docker, Kubernetes, GitLab CI/CD, Traefik,
          Cloudflare. Infrastructure is self-hosted, including my own private
          GitLab instance for production projects.
        </p>
      </motion.div>
    </section>
  );
}
