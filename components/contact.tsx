"use client"

import { useState } from "react"
import { Phone, Linkedin, Github, Send, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Contact() {
  const [ref, isVisible] = useScrollAnimation()
  const [btnHover, setBtnHover] = useState(false)

  return (
    <section id="contact" ref={ref} className="relative px-6 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-[150px] animate-glow-pulse" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-card/40 p-10 text-center backdrop-blur-sm lg:p-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />

          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            )}
          >
            <Sparkles className="mx-auto mb-6 h-10 w-10 text-primary animate-pulse" />
          </div>

          <p
            className={cn(
              "mb-6 text-base font-semibold uppercase tracking-widest text-primary transition-all duration-700 delay-100",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            Contacto
          </p>
          <h2
            className={cn(
              "font-serif text-5xl font-bold transition-all duration-700 delay-200 md:text-6xl lg:text-7xl",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
              {"Trabajemos juntos"}
            </span>
          </h2>
          <p
            className={cn(
              "mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {"Si tienes un proyecto en mente o simplemente quieres saludar, no dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y colaboraciones."}
          </p>

          <a
            href="https://wa.me/18094333384"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative mt-10 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-10 py-4 text-sm font-semibold text-primary-foreground transition-all duration-700 delay-500 hover:shadow-2xl hover:shadow-primary/30",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              btnHover ? "scale-105" : "scale-100"
            )}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            {/* Shimmer on button */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
            <Send className={cn(
              "relative h-4 w-4 transition-all duration-500",
              btnHover ? "translate-x-1 -translate-y-1 rotate-12" : ""
            )} />
            <span className="relative">Enviar Mensaje</span>
          </a>

          <div
            className={cn(
              "mt-12 flex items-center justify-center gap-5 transition-all duration-700 delay-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {[
              { href: "https://wa.me/18094333384", icon: Phone, label: "WhatsApp" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com", icon: Github, label: "GitHub" },
            ].map((social, i) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-13 w-13 items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground transition-all duration-500 hover:border-primary hover:text-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-110 hover:bg-primary/10"
                style={{ transitionDelay: `${800 + i * 100}ms` }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
