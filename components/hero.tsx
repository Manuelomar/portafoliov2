"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const stats = [
  { value: 5, suffix: "+", label: "Proyectos\nCompletados" },
  { value: 6, suffix: "+", label: "Anos de\nExperiencia" },
  { value: 10, suffix: "+", label: "Tecnologias\nDominadas" },
]

const titles = ["Full Stack Developer", "Frontend Engineer", "Backend Developer", "Software Engineer"]

function useTypingEffect(words: string[], speed = 100, pause = 2000) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1))
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pause)
          }
        } else {
          setText(currentWord.slice(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed
    )
    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, pause])

  return text
}

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let current = 0
    const increment = target / 40
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 40)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span className="font-serif text-4xl font-bold text-foreground md:text-5xl">
      {count}{suffix}
    </span>
  )
}

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`p-${i}`}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle-float ${Math.random() * 4 + 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-0"
      style={{
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, hsl(270 80% 65% / 0.06) 0%, transparent 70%)",
        transition: "left 0.3s ease-out, top 0.3s ease-out",
      }}
    />
  )
}

export function Hero() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const typedText = useTypingEffect(titles, 80, 2500)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden px-6 pt-24 lg:pt-32">
      <MouseGlow />
      <FloatingParticles />

      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/[0.07] blur-[100px] animate-glow-pulse" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-primary/[0.05] blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/[0.04] blur-[80px] animate-float" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <div className="order-2 lg:order-1">
            <p
              className={cn(
                "mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-700",
                isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-90"
              )}
            >
              Disponible para proyectos
            </p>
            <h1
              className={cn(
                "mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl md:text-6xl",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              Hola, soy{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-gradient">
                  Manuel Medina
                </span>
              </span>
            </h1>
            <div
              className={cn(
                "mt-3 h-12 transition-all duration-700 delay-300",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <h2 className="font-serif text-2xl font-bold text-primary/80 sm:text-3xl md:text-4xl">
                {typedText}
                <span className="ml-0.5 inline-block w-[3px] h-[1em] align-middle bg-primary" style={{ animation: "typing-cursor 0.8s step-end infinite" }} />
              </h2>
            </div>
            <p
              className={cn(
                "mt-6 max-w-lg text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-[450ms]",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              Desarrollo soluciones digitales de alta calidad, combinando
              tecnologias modernas de frontend y backend para crear experiencias
              que superan expectativas.
            </p>

            {/* Social icons */}
            <div
              className={cn(
                "mt-8 flex items-center gap-4 transition-all duration-700 delay-[550ms]",
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
                  className={cn(
                    "group relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-500 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-2 hover:scale-110",
                    mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -inset-1 rounded-full bg-primary/0 transition-all duration-500 group-hover:bg-primary/5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - photo */}
          <div
            className={cn(
              "order-1 flex justify-center lg:order-2 lg:justify-end transition-all duration-1000 delay-200",
              isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90"
            )}
          >
            <div className="relative">
              {/* Orbiting dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-orbit" style={{ animationDuration: "15s" }}>
                  <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-lg shadow-primary/50" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-orbit" style={{ animationDuration: "20s", animationDelay: "-5s" }}>
                  <div className="h-2 w-2 rounded-full bg-primary/60 shadow-md shadow-primary/30" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-orbit" style={{ animationDuration: "25s", animationDelay: "-10s" }}>
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-6 rounded-full bg-primary/15 blur-3xl animate-glow-pulse" />

              {/* Photo */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-primary/40 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/images/manuel.png"
                  alt="Manuel Medina"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              </div>

              {/* Spinning ring */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-primary/20 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-dotted border-primary/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={cn(
            "mt-16 overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-1000 delay-700 lg:mt-20",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}
        >
          {/* Shimmer top border */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer" />
          <div className="grid grid-cols-3 divide-x divide-border">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center gap-1 px-4 py-6 text-center transition-all duration-500 hover:bg-primary/5 md:px-8 md:py-8"
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                <span className="mt-1 whitespace-pre-line text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-primary/80 md:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll hacia abajo"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
