"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Sobre mi", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Contacto", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
    const sections = navLinks.map((link) => link.href.replace("#", ""))
    let current = ""
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) {
          current = sectionId
        }
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-700",
        scrolled
          ? "bg-background/80 backdrop-blur-2xl shadow-lg shadow-primary/5 border-b border-border/50"
          : "bg-transparent",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="group relative font-serif text-xl font-bold tracking-tight text-foreground transition-all duration-500 hover:scale-110"
        >
          <span className="relative z-10 flex items-center gap-0.5">
            <span className="inline-block transition-all duration-500 group-hover:-translate-y-1 group-hover:text-primary">M</span>
            <span className="inline-block transition-all duration-500 delay-75 group-hover:translate-y-1 group-hover:text-primary">M</span>
            <span className="inline-block text-primary transition-all duration-500 group-hover:scale-150 group-hover:rotate-[360deg]">.</span>
          </span>
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-500 group-hover:w-full" />
        </a>

        {/* Desktop pill nav */}
        <ul className="hidden items-center gap-0.5 rounded-full border border-border/60 bg-card/80 px-1.5 py-1 backdrop-blur-xl md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative block rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-500",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/30"
                      style={{
                        animation: "scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "relative overflow-hidden rounded-xl p-2.5 text-muted-foreground transition-all duration-500 hover:text-primary md:hidden",
            isOpen ? "bg-primary/10 text-primary rotate-90" : "bg-card/80 rotate-0"
          )}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <li
                key={link.href}
                className={cn(
                  "transition-all duration-500",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                )}
                style={{ transitionDelay: isOpen ? `${i * 80}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-500",
                    isActive
                      ? "bg-primary/15 text-primary shadow-inner shadow-primary/5"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground hover:translate-x-2"
                  )}
                >
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-primary shadow-md shadow-primary/50 animate-pulse" />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
