"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Building2, Briefcase, Rocket, ChevronRight } from "lucide-react"

const experiences = [
  {
    id: "cultura",
    company: "Ministerio de Cultura",
    role: "Desarrollador Front-end",
    period: "2024 -- Presente",
    description: [
      "Desarrollo y mantenimiento de interfaces frontend con multiples modulos (transporte y suministro).",
      "Implementacion de soluciones escalables y modernas, con integracion fluida entre modulos.",
    ],
    techs: ["Angular", "TypeScript", "HTML", "CSS"],
    icon: Building2,
    current: true,
  },
  {
    id: "solvex",
    company: "Solvex Dominicana",
    role: "Desarrollador Full Stack",
    period: "2020 -- 2024",
    description: [
      "Lidere y coordine equipos de desarrollo.",
      "Disene e implemente soluciones de comercio electronico optimizando experiencia del usuario y eficiencia operativa.",
      "Colabore con equipos multidisciplinares en diseno UX/UI e infraestructura para cohesion de proyectos.",
    ],
    techs: ["React", ".NET", "C#", "SQL", "JavaScript"],
    icon: Briefcase,
    current: false,
  },
  {
    id: "freelancer",
    company: "Freelancer",
    role: "Desarrollador Full Stack",
    period: "2019 -- Presente",
    description: [
      "Creacion de portales informativos: planeacion, diseno visual, desarrollo, integracion, pruebas, lanzamiento y mantenimiento.",
      "Desarrollo integral de sistemas abarcando backend y frontend.",
      "Optimizacion avanzada de rendimiento en aplicaciones web.",
    ],
    techs: ["React", "JavaScript", "WordPress", "WebFlow", "HTML", "CSS"],
    icon: Rocket,
    current: true,
  },
]

function ExperienceCard({
  experience,
  index,
  isVisible,
}: {
  experience: (typeof experiences)[number]
  index: number
  isVisible: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const Icon = experience.icon

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowDetails(true), 500 + index * 250)
      return () => clearTimeout(timer)
    }
  }, [isVisible, index])

  return (
    <div
      className={cn(
        "group relative transition-all",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
      style={{
        transitionDuration: "900ms",
        transitionDelay: `${index * 250}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border p-8 transition-all duration-700 md:p-10 lg:p-12",
          isHovered
            ? "border-primary/50 bg-primary/[0.06] shadow-2xl shadow-primary/10 -translate-y-2 scale-[1.01]"
            : "border-border bg-card/40"
        )}
      >
        {/* Animated glow */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000",
            isHovered && "opacity-100"
          )}
          style={{
            background: "radial-gradient(ellipse at 30% 0%, hsl(270 80% 65% / 0.1), transparent 60%)",
          }}
        />

        {/* Shimmer border */}
        <div className={cn(
          "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-700",
          isHovered ? "opacity-100 animate-shimmer" : "opacity-0"
        )} />

        <div className="relative flex flex-col gap-6 md:flex-row md:gap-10 lg:gap-14">
          {/* Icon + period */}
          <div className="flex items-start gap-4 md:w-56 md:flex-col md:items-center md:text-center">
            <div
              className={cn(
                "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border transition-all duration-700",
                experience.current
                  ? "border-primary/50 bg-primary/15 text-primary"
                  : isHovered
                    ? "border-primary/30 bg-primary/10 text-primary rotate-6 scale-110"
                    : "border-border bg-secondary text-muted-foreground rotate-0 scale-100"
              )}
              style={{
                boxShadow: isHovered || experience.current
                  ? "0 0 30px hsl(270 80% 65% / 0.25)"
                  : "none",
              }}
            >
              <Icon className="h-7 w-7 transition-transform duration-500" />
              {experience.current && (
                <span className="absolute -top-1 -right-1 h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                </span>
              )}
            </div>
            <div className="md:mt-2">
              <span className="block font-mono text-xs text-muted-foreground">{experience.period}</span>
              {experience.current && (
                <span className="mt-1.5 inline-block rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary animate-pulse">
                  Activo
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className={cn(
              "text-2xl font-bold transition-all duration-500 lg:text-3xl",
              isHovered ? "text-foreground translate-x-1" : "text-foreground/90"
            )}>
              {experience.role}
            </h3>
            <span className={cn(
              "mt-2 inline-block text-base font-semibold transition-all duration-500",
              isHovered ? "text-primary translate-x-1" : "text-primary/70"
            )}>
              {experience.company}
            </span>

            <ul className="mt-6 space-y-3">
              {experience.description.map((item, i) => (
                <li
                  key={item}
                  className={cn(
                    "flex items-start gap-3 text-base leading-relaxed text-muted-foreground transition-all",
                    showDetails ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  )}
                  style={{
                    transitionDuration: "700ms",
                    transitionDelay: `${i * 100}ms`,
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <ChevronRight className={cn(
                    "mt-1 h-5 w-5 shrink-0 transition-all duration-500",
                    isHovered ? "text-primary translate-x-1" : "text-primary/40"
                  )} />
                  <span className={cn("transition-colors duration-500", isHovered && "text-foreground/80")}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {experience.techs.map((tech, i) => (
                <span
                  key={tech}
                  className={cn(
                    "rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-sm text-primary/80 transition-all duration-500",
                    showDetails ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-75",
                    isHovered && "border-primary/40 bg-primary/10 text-primary shadow-sm shadow-primary/10 -translate-y-0.5"
                  )}
                  style={{
                    transitionDelay: `${experience.description.length * 100 + i * 60}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="experience" ref={ref} className="relative px-6 py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-primary/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div
          className={cn(
            "flex items-center gap-4 mb-12 transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Experiencia
          </h2>
          <div className={cn(
            "h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent transition-all duration-1500 delay-300 origin-left",
            isVisible ? "scale-x-100" : "scale-x-0"
          )} />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
