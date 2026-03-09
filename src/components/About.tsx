"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-foreground">About</h2>
          <p className="text-muted leading-relaxed mb-4">
            I&apos;m a fullstack developer with a strong backend focus. My core
            stack is Python with FastAPI and Strawberry GraphQL on the backend,
            and React with Next.js on the frontend.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I don&apos;t just write code — I ship it. Docker, Compose, Swarm,
            GitLab CI/CD, Traefik, Cloudflare — all part of the workflow. I like
            having control over systems end-to-end: from writing the logic, to
            designing clean UIs, to deploying everything on my own terms.
          </p>
          <p className="text-muted leading-relaxed">
            Infrastructure is self-hosted, including my own private GitLab
            instance where I manage production projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
