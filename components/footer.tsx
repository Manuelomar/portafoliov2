import { Github, Linkedin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {"Desarrollado por "}
          <span className="font-medium text-foreground transition-colors duration-300 hover:text-primary cursor-default">Manuel Medina</span>
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "https://wa.me/18094333384", icon: Phone, label: "WhatsApp" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-500 hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-md hover:shadow-primary/15 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
