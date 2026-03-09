"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Backend",
    items: "Go, Python, gRPC, GraphQL, NATS, Kafka",
  },
  {
    name: "Frontend",
    items: "TypeScript, React, Next.js, Tailwind CSS",
  },
  {
    name: "Storage",
    items: "PostgreSQL, ClickHouse, MongoDB, Redis, MinIO",
  },
  {
    name: "Infra",
    items: "Kubernetes, Docker, GitLab CI/CD, Traefik, Linux",
  },
  {
    name: "Observability",
    items: "Grafana, Loki, OpenTelemetry, Prometheus",
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="pb-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
        Stack
      </p>
      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-[140px_1fr] md:gap-y-4 md:gap-x-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="md:contents"
          >
            <span className="font-mono text-xs text-muted uppercase tracking-wider">
              {cat.name}
            </span>
            <p className="text-foreground text-sm mt-1 md:mt-0">
              {cat.items}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
