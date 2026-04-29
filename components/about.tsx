"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="about" ref={ref} className="relative px-6 py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-sm lg:p-12">
          {/* Shimmer border top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer" />

          <div
            className={cn(
              "flex items-center gap-4 mb-10 transition-all duration-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Sobre Mi
            </h2>
            <div className={cn(
              "h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent transition-all duration-1500 delay-300 origin-left",
              isVisible ? "scale-x-100" : "scale-x-0"
            )} />
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-5 lg:col-span-3">
              {[
                <>
                  Me considero una persona <span className="font-medium text-foreground">responsable, dinamica y creativa</span>.
                  Tengo facilidad de adaptacion y capacidad de trabajar en equipo en condiciones de presion.
                </>,
                <>
                  Poseo iniciativa para resolver problemas eficientemente y lograr las metas y objetivos
                  trazados por la empresa. Como desarrollador de software, he trabajado tanto con
                  tecnologia <span className="font-medium text-primary">backend</span> como <span className="font-medium text-primary">frontend</span>.
                </>,
                <>
                  He liderado equipos y colaborado estrechamente con las partes interesadas para ofrecer
                  productos de alta calidad que superen las expectativas.
                </>,
              ].map((content, i) => (
                <p
                  key={`about-p-${i}`}
                  className={cn(
                    "text-base leading-relaxed text-muted-foreground transition-all duration-700",
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                  )}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  {content}
                </p>
              ))}
            </div>

            <div
              className={cn(
                "lg:col-span-2 transition-all duration-1000 delay-500",
                isVisible ? "translate-x-0 opacity-100 rotate-0" : "translate-x-12 opacity-0 rotate-3"
              )}
            >
              <div className="relative group mx-auto w-fit">
                <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/images/manuel.png"
                    alt="Manuel Medina"
                    fill
                    className="object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 transition-opacity duration-700 group-hover:opacity-0" />
                </div>
                {/* Animated corner frame */}
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-primary/30 -z-10 transition-all duration-700 group-hover:-bottom-5 group-hover:-right-5 group-hover:border-primary/50" />
                <div className="absolute -top-3 -left-3 h-full w-full rounded-2xl border border-primary/10 -z-10 transition-all duration-700 group-hover:-top-5 group-hover:-left-5 group-hover:border-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
