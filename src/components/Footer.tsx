export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A]">
      <div className="max-w-[960px] mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#525252]">
          Landerix &copy; {new Date().getFullYear()}
        </span>
        <a
          href="https://github.com/lander1x"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-[#525252] hover:text-foreground transition-colors"
        >
          github.com/lander1x
        </a>
      </div>
    </footer>
  );
}
