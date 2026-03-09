"use client";

import { motion } from "framer-motion";

interface TechCategory {
  name: string;
  items: string[];
}

const categories: TechCategory[] = [
  {
    name: "Backend",
    items: ["Python", "FastAPI", "Strawberry GraphQL", "SQLAlchemy"],
  },
  {
    name: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "PostGIS", "MongoDB", "Redis"],
  },
  {
    name: "AI",
    items: ["Google Gemini"],
  },
  {
    name: "DevOps",
    items: ["Docker", "Linux", "GitLab CI/CD"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 bg-[#FFF5ED]/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-mono text-accent mb-4 uppercase tracking-wider">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 bg-white border border-[#E8DDD0] rounded-xl text-sm text-foreground hover:border-accent/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
