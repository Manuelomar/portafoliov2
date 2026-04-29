"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Pokedex",
    description:
      "Pokedex interactiva con listado dinamico de Pokemon mostrando nombre, tipo, numero y sprite. Incluye navegacion por categorias y diseno responsive.",
    techs: ["React", "API", "CSS"],
    link: "https://pokedex-mpd.web.app",
    image: "/projects/pokedex.jpg",
  },
  {
    title: "Tundra",
    description:
      "Landing page interactiva y moderna para una tarjeta inteligente que comparte informacion al acercarla al celular. Totalmente animada y responsive.",
    techs: ["JavaScript", "HTML", "CSS"],
    link: "https://tundratap.com",
    image: "/projects/tundra.jpg",
  },
  {
    title: "ADM APP",
    description:
      "Aplicacion web interactiva centrada en experiencia atractiva y funcional con arquitectura Full Stack robusta.",
    techs: ["React", ".NET", "C#"],
    link: null,
    image: "/projects/adm-app.jpg",
  },
  {
    title: "Bizcochao",
    description:
      "Sistema integral de gestion para reposterias. Incluye facturacion, reportes de ventas, catalogo de productos, control de inventario y carrito de compra.",
    techs: ["React", ".NET", "SQL", "C#"],
    link: null,
    image: "/projects/bizcochao.jpg",
  },
  {
    title: "Hilda Dental",
    description:
      "Portal web moderno con informacion de servicios y planes, seccion de equipo y formulario para consultas o citas. Optimizado para cualquier dispositivo.",
    techs: ["WebFlow", "CSS", "Responsive"],
    link: null,
    image: "/projects/hilda-dental.jpg",
  },
]

function ProjectCard({ project, index, isVisible }: { project: typeof projects[number]; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-700",
        isHovered
          ? "border-primary/40 shadow-2xl shadow-primary/15 -translate-y-3 scale-[1.02]"
          : "border-border bg-card/40",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0",
      )}
      style={{ transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`Vista previa del proyecto ${project.title}`}
          fill
          className={cn(
            "object-cover transition-all duration-1000",
            isHovered ? "scale-110 brightness-110" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 transition-all duration-700",
          isHovered
            ? "bg-gradient-to-t from-card via-card/60 to-primary/10"
            : "bg-gradient-to-t from-card via-card/50 to-transparent"
        )} />
      </div>

      {/* Shimmer on hover */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-opacity duration-500",
        isHovered ? "opacity-100 animate-shimmer" : "opacity-0"
      )} />

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between">
          <h3 className={cn(
            "font-serif text-xl font-bold transition-all duration-500",
            isHovered ? "text-primary translate-x-1" : "text-foreground"
          )}>
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-all duration-500",
                isHovered
                  ? "border-primary bg-primary/15 text-primary shadow-lg shadow-primary/20 rotate-0 scale-110"
                  : "border-border bg-secondary/50 -rotate-12 scale-100"
              )}
              aria-label={`Ver proyecto ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className={cn(
          "mt-3 flex-1 text-sm leading-relaxed transition-colors duration-500",
          isHovered ? "text-foreground/70" : "text-muted-foreground"
        )}>
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techs.map((tech, i) => (
            <span
              key={tech}
              className={cn(
                "rounded-full border px-3 py-1 font-mono text-xs transition-all duration-500",
                isHovered
                  ? "border-primary/40 bg-primary/15 text-primary -translate-y-0.5 shadow-sm shadow-primary/10"
                  : "border-primary/20 bg-primary/5 text-primary/80"
              )}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="projects" ref={ref} className="relative px-6 py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div
          className={cn(
            "flex items-center gap-4 mb-12 transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Proyectos
          </h2>
          <div className={cn(
            "h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent transition-all duration-1500 delay-300 origin-left",
            isVisible ? "scale-x-100" : "scale-x-0"
          )} />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
