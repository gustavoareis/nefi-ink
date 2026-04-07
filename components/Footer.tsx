export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-10 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <span className="font-display text-xl text-[#e8e0d0] tracking-wider">
            nefi<span className="text-[#c41e1e]">.</span>ink
          </span>
          <p className="font-mono text-[9px] text-[#4a4540] mt-1 uppercase tracking-[0.3em]">
            Arte · Pele · Identidade
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/nefi.ink"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] text-[#4a4540] hover:text-[#c41e1e] transition-colors uppercase tracking-[0.25em]"
          >
            Instagram
          </a>
          <div className="w-px h-3 bg-[#1a1a1a]" />
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] text-[#4a4540] hover:text-[#c41e1e] transition-colors uppercase tracking-[0.25em]"
          >
            WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <p className="font-mono text-[9px] text-[#4a4540] uppercase tracking-[0.2em]">
          © {year} Ramon Néfi
        </p>
      </div>
    </footer>
  )
}
