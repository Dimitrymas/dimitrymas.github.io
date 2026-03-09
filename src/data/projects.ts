export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "SmartCart",
    description:
      "AI shopping assistant — Gemini function-calling, multi-store price comparison",
    tech: ["FastAPI", "GraphQL", "Next.js", "Gemini AI", "PostGIS"],
    github: "https://github.com/Dimitrymas/smartcart",
  },
  {
    title: "MatchFit",
    description:
      "Sports partner matching — swipe, real-time chat, PostGIS geospatial",
    tech: ["FastAPI", "GraphQL", "Next.js", "PostGIS", "Redis", "WebSocket"],
    github: "https://github.com/Dimitrymas/matchfit",
  },
  {
    title: "Finance Game",
    description:
      "Multiplayer life sim — AI-driven storylines, turn-based gameplay",
    tech: ["FastAPI", "GraphQL", "Next.js", "Gemini AI", "PostgreSQL"],
    github: "https://github.com/Dimitrymas/finance-game",
  },
  {
    title: "Teach & Learn",
    description:
      "P2P knowledge exchange — geo matching, MongoDB aggregation pipelines",
    tech: ["FastAPI", "GraphQL", "React", "MongoDB", "Geospatial"],
    github: "https://github.com/Dimitrymas/teach-and-learn",
  },
  {
    title: "CoWatch",
    description:
      "Synchronized video watching — WebSocket rooms, real-time playback sync",
    tech: ["FastAPI", "WebSocket", "React", "ReactPlayer"],
    github: "https://github.com/Dimitrymas/co-watch",
  },
  {
    title: "vision-browser-sdk",
    description:
      "Browser automation SDK with AI vision for intelligent web interaction",
    tech: ["Python", "AI Vision", "Browser Automation"],
    github: "https://github.com/Dimitrymas/vision-browser-sdk",
  },
];
