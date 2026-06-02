import * as React from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col"
      >
        {/* preview */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 group-hover:border-emerald-400/30">
          <div className="flex items-center gap-1.5 px-4 pt-4">
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
          </div>

          <div className="relative grid h-44 place-items-center">
            {/* green glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 130%, rgba(28,191,101,0.42), rgba(28,191,101,0) 60%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 130%, rgba(28,191,101,0.32), rgba(28,191,101,0) 55%)",
              }}
            />
            <span className="relative grid size-14 place-items-center rounded-2xl border border-emerald-400/30 bg-ink-950/60 text-2xl font-semibold tracking-tight text-emerald-300 shadow-[0_10px_30px_-8px_rgba(28,191,101,0.6)]">
              {project.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* name + one-liner */}
        <div className="mt-4 px-1">
          <div className="flex items-center gap-1.5">
            <h3 className="text-[15px] font-semibold tracking-tight text-ink-50">
              {project.name}
            </h3>
            <ArrowUpRight
              weight="bold"
              className={cn(
                "size-3.5 text-ink-400 transition-all duration-300 ease-[var(--ease-out-quint)]",
                "opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-emerald-300",
              )}
            />
          </div>
          <p className="mt-1 text-sm text-ink-400">{project.oneLiner}</p>
        </div>
      </a>
    </Reveal>
  );
}
