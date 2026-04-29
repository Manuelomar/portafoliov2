"use client"

import React, { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

function AngularIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.93 12.645h4.134L11.996 7.74 9.93 12.645zM11.996.009 0 4.308l1.829 15.874L11.996 24l10.166-3.818L24 4.309 11.996.009zM19.08 18.5H16.2l-1.14-2.84H8.934L7.794 18.5H4.91L12 2l7.08 16.5z"/>
    </svg>
  )
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.838.182a1.655 1.655 0 0 0-.748.75C4.948 3.2 5.13 4.847 6.07 6.818 4.31 7.96 3.14 9.46 3.14 10.89c0 .403.078.78.232 1.127.436.985 1.567 1.598 3.2 1.773 1.076.116 2.37.058 3.788-.162a21.41 21.41 0 0 0 1.635 2.39c1.78 2.268 3.542 3.543 4.888 3.543.31 0 .593-.068.838-.183.647-.305.978-.958.978-1.885 0-1.098-.633-2.54-1.753-4.075a15.1 15.1 0 0 0 1.527-1.06c1.455-1.217 2.386-2.6 2.386-3.578 0-.403-.078-.78-.232-1.127-.436-.985-1.567-1.598-3.2-1.773a12.15 12.15 0 0 0-1.372-.043z"/>
    </svg>
  )
}

function JavaScriptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.47-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.29-.81 3.54.6 4.47 1.392.585 3.438 1.065 3.585 1.89.135.915-.675 1.215-1.515 1.095-.855-.164-1.335-.72-1.845-1.33l-1.86 1.065c.21.48.54.825.78 1.095 1.65 1.515 5.7 1.44 6.435-1.155.03-.09.45-1.29-.195-2.805zM13.125 8.625h-2.295v7.275c0 1.575.075 3.015-.84 3.405-.465.195-1.155.12-1.545-.075l-.855 1.455c.6.36 1.395.57 2.205.555 1.14-.03 2.01-.57 2.49-1.29.6-.915.465-2.04.465-3.315l-.015-7.545-.015-.465z"/>
    </svg>
  )
}

function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
    </svg>
  )
}

function HtmlIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.076-.757.076-.771.076-.757H6.792l.228 2.625H15.41l-.24 2.25H10.202l.228 2.625h4.668l-.306 3.727-2.814.93-2.814-.93-.174-2.352H6.844l.342 4.244L12 21l4.803-1.5L17.561 9.75z"/>
    </svg>
  )
}

function CssIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.166-1.572L18.59 4.414z"/>
    </svg>
  )
}

function DotNetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a3.2 3.2 0 0 1-.27-.592h-.032c.03.39.044.96.044 1.712v5.352H3.17V7.53h1.7l3.923 6.257c.183.29.3.508.353.653h.022c-.04-.455-.06-1.08-.06-1.873V7.53h1.362zM1.713 16.335H.25a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h1.463a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25z"/>
    </svg>
  )
}

function CSharpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.5 15.97l.35-2.15h1.73l-.35 2.15h1.7l.35-2.15H17v-1.58h-1.45l.26-1.6H17.5v-1.58h-1.42l.35-2.15h-1.7l-.35 2.15h-1.73l.35-2.15h-1.7l-.35 2.15H9.23v1.58h1.49l-.26 1.6H8.74v1.58h1.45l-.35 2.15h1.66zm.61-3.73h1.73l-.26 1.6H11.85l.26-1.6zM22.57 12c0 5.52-4.48 10-10 10s-10-4.48-10-10S7.05 2 12.57 2s10 4.48 10 10zm-2 0c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8 8-3.59 8-8z"/>
    </svg>
  )
}

function SqlIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zM6 17v-1.72c1.47.89 3.62 1.47 6 1.47s4.53-.58 6-1.47V17c0 .5-2.13 2-6 2s-6-1.5-6-2zm0-4v-1.72c1.47.89 3.62 1.47 6 1.47s4.53-.58 6-1.47V13c0 .5-2.13 2-6 2s-6-1.5-6-2zm0-4V7.28c1.47.89 3.62 1.47 6 1.47s4.53-.58 6-1.47V9c0 .5-2.13 2-6 2s-6-1.5-6-2z"/>
    </svg>
  )
}

function WebFlowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.802 8.56s-1.946 6.103-2.105 6.607a.263.263 0 0 1-.1-.144c-.143-.678-1.705-6.463-1.705-6.463S12.86 6.7 10.663 6.7c-1.94 0-3.882 1.728-4.578 4.122 0 0-1.675 5.685-1.834 6.189-.144-.466-.983-3.218-1.538-5.024C2.165 10.012 0 6.7 0 6.7h4.135s1.267 4.358 1.41 4.862c.146-.5 2.092-7.082 2.092-7.082s.103-.08.26-.08h.16c1.982 0 2.903 1.793 3.263 3.262 0 0 1.348 4.608 1.491 5.112.15-.5 2.036-6.534 2.036-6.534.647-2.125 2.494-3.84 4.45-3.84h.157c.148 0 .244.072.244.072L24 17.3h-4.162l-2.036-8.74z"/>
    </svg>
  )
}

function WordPressIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.027-.78-.07-1.109m-7.981.105c.647-.034 1.233-.1 1.233-.1.58-.068.512-.924-.068-.89 0 0-1.744.137-2.865.137-1.054 0-2.828-.137-2.828-.137-.58-.034-.648.856-.068.89 0 0 .548.066 1.13.1l1.68 4.605-2.363 7.085L5.563 6.93c.649-.034 1.235-.1 1.235-.1.58-.068.512-.924-.068-.89 0 0-1.744.137-2.865.137-.202 0-.44-.005-.693-.014C4.814 3.074 8.16 1.215 12 1.215c2.865 0 5.479 1.095 7.434 2.89-.048-.003-.09-.012-.141-.012-1.054 0-1.8.916-1.8 1.902 0 .89.513 1.641 1.054 2.531.41.717.89 1.641.89 2.973 0 .923-.354 1.994-.82 3.488l-1.075 3.59zM12 22.784c-1.47 0-2.878-.29-4.162-.784l4.42-12.842 4.526 12.402c.03.07.065.137.105.196A10.775 10.775 0 0 1 12 22.784M1.213 12c0-1.487.322-2.898.895-4.17l4.928 13.517C3.501 19.272 1.213 15.918 1.213 12M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0"/>
    </svg>
  )
}

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Angular: AngularIcon,
  React: ReactIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  ".NET": DotNetIcon,
  "C#": CSharpIcon,
  SQL: SqlIcon,
  WebFlow: WebFlowIcon,
  WordPress: WordPressIcon,
}

const skills = [
  { name: "React", level: 95 },
  { name: "Angular", level: 85 },
  { name: "JavaScript", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: ".NET", level: 85 },
  { name: "C#", level: 82 },
  { name: "SQL", level: 80 },
  { name: "WebFlow", level: 75 },
  { name: "WordPress", level: 78 },
]

function SkillCard({ skill, index, isVisible }: { skill: typeof skills[number]; index: number; isVisible: boolean }) {
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const Icon = skillIcons[skill.name]

  useEffect(() => {
    if (!isVisible) return
    const timer = setTimeout(() => {
      setProgress(skill.level)
    }, 400 + index * 100)
    return () => clearTimeout(timer)
  }, [isVisible, skill.level, index])

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center gap-3 rounded-2xl border p-6 transition-all duration-700",
        isHovered
          ? "border-primary/50 bg-primary/[0.08] -translate-y-3 scale-105 shadow-xl shadow-primary/15"
          : "border-border bg-card/40",
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90"
      )}
      style={{ transitionDelay: isVisible ? `${200 + index * 80}ms` : "0ms" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover glow */}
      <div className={cn(
        "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700",
        isHovered && "opacity-100"
      )} style={{
        background: "radial-gradient(circle at 50% 30%, hsl(270 80% 65% / 0.12), transparent 70%)",
      }} />

      {/* Icon */}
      <div className={cn(
        "relative flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-700",
        isHovered
          ? "border-primary/50 bg-primary/20 shadow-lg shadow-primary/25 rotate-6 scale-110"
          : "border-border bg-secondary/50 rotate-0 scale-100"
      )}>
        {Icon && <Icon className={cn(
          "h-7 w-7 transition-all duration-700",
          isHovered ? "text-primary" : "text-muted-foreground"
        )} />}
      </div>

      {/* Name */}
      <span className={cn(
        "text-sm font-semibold transition-all duration-500",
        isHovered ? "text-primary" : "text-foreground"
      )}>
        {skill.name}
      </span>

      {/* Circular-style progress */}
      <div className="relative w-full">
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className={cn(
              "absolute inset-y-0 left-0 rounded-full transition-all ease-out",
              isHovered
                ? "bg-gradient-to-r from-primary via-purple-400 to-primary bg-[length:200%_100%] animate-shimmer"
                : "bg-gradient-to-r from-primary to-primary/60"
            )}
            style={{
              width: `${progress}%`,
              transitionDuration: "1.2s",
            }}
          />
        </div>
        <span className={cn(
          "mt-2 block text-center font-mono text-xs font-bold transition-all duration-500",
          isHovered ? "text-primary scale-110" : "text-muted-foreground scale-100"
        )}>
          {progress}%
        </span>
      </div>
    </div>
  )
}

export function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="skills" ref={ref} className="relative px-6 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-sm lg:p-12">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer" />

          <div
            className={cn(
              "flex items-center gap-4 mb-4 transition-all duration-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Habilidades
            </h2>
            <div className={cn(
              "h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent transition-all duration-1500 delay-300 origin-left",
              isVisible ? "scale-x-100" : "scale-x-0"
            )} />
          </div>
          <p
            className={cn(
              "mb-10 max-w-lg text-sm text-muted-foreground transition-all duration-700 delay-150",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            Tecnologias y herramientas que utilizo para crear soluciones digitales de alto impacto.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
