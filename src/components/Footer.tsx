export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#E8DDD0]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-muted">
          Landerix &copy; {new Date().getFullYear()}
        </span>
        <div className="flex gap-6">
          <a
            href="https://github.com/lander1x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://landerix.me"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            landerix.me
          </a>
        </div>
      </div>
    </footer>
  );
}
