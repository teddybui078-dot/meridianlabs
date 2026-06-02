"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "@phosphor-icons/react/dist/ssr";
import {
  Microscope,
  Palette,
  Code,
  BrainCircuit,
  Package,
  TrendingUp,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Logo } from "@/components/layout/logo";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { site } from "@/lib/data/site";

const EASE = [0.23, 1, 0.32, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE, delay: 0.1 * i },
  }),
};

/**
 * What the studio does — six capabilities orbiting the mark. Each links to a
 * couple of related disciplines, and the badge groups them into three stages
 * (Think → Make → Move) whose colour deepens around the ring.
 */
const timelineData = [
  {
    id: 1,
    title: "Research",
    date: "01",
    badge: "THINK",
    content: "We read the field and the user before we write a line of code.",
    category: "Think",
    icon: Microscope,
    relatedIds: [2, 4],
    status: "pending" as const,
    energy: 88,
  },
  {
    id: 2,
    title: "Design",
    date: "02",
    badge: "THINK",
    content: "Interfaces that feel obvious — taste applied with intent.",
    category: "Think",
    icon: Palette,
    relatedIds: [1, 5],
    status: "pending" as const,
    energy: 92,
  },
  {
    id: 3,
    title: "Engineering",
    date: "03",
    badge: "MAKE",
    content: "Fast, reliable systems that hold up once real people arrive.",
    category: "Make",
    icon: Code,
    relatedIds: [4, 5],
    status: "in-progress" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Models",
    date: "04",
    badge: "MAKE",
    content: "Choosing, tuning, and running the right model for the job.",
    category: "Make",
    icon: BrainCircuit,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 90,
  },
  {
    id: 5,
    title: "Product",
    date: "05",
    badge: "MOVE",
    content: "Turning a raw capability into something worth coming back to.",
    category: "Move",
    icon: Package,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 84,
  },
  {
    id: 6,
    title: "Growth",
    date: "06",
    badge: "MOVE",
    content: "Getting the work in front of the builders who actually need it.",
    category: "Move",
    icon: TrendingUp,
    relatedIds: [5, 3],
    status: "completed" as const,
    energy: 72,
  },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-6 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-4 lg:px-10">
        {/* Left — editorial headline / tagline / CTA */}
        <div className="order-2 flex flex-col items-center pb-12 text-center lg:order-1 lg:items-start lg:pb-0 lg:text-left">
          <motion.span
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-ink-950/[0.08] bg-white/60 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500 backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 ambient-pulse" />
            {site.tagline}
          </motion.span>

          {/* semantic heading for a11y/SEO; the visual headline is the typewriter */}
          <h1 className="sr-only">Building cool AI projects.</h1>
          <TypewriterEffect
            words={[
              { text: "Building" },
              { text: "cool", className: "text-emerald-600 dark:text-emerald-600" },
              { text: "AI" },
              { text: "projects." },
            ]}
            className="mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.0] tracking-[-0.04em]"
            cursorClassName="bg-emerald-500 h-7 md:h-9 lg:h-11"
          />

          <motion.p
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-500"
          >
            {site.description}
          </motion.p>

          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex items-center gap-3"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink-950 py-3 pl-6 pr-3 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(10,13,16,0.5)] transition-colors hover:bg-ink-800"
            >
              View Projects
              <span className="grid size-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-0.5">
                <Play weight="fill" className="size-3 text-white" />
              </span>
            </Link>
            <Link
              href="/about"
              className="rounded-full px-4 py-3 text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
            >
              About the studio
            </Link>
          </motion.div>
        </div>

        {/* Right — the orbital timeline of projects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="order-1 h-[58vh] min-h-[420px] lg:order-2 lg:h-screen"
        >
          <RadialOrbitalTimeline
            className="h-full"
            timelineData={timelineData}
            centerLabel="What we do"
            metricLabel="Depth"
            centerContent={
              <Logo className="size-12 drop-shadow-[0_2px_10px_rgba(28,191,101,0.6)]" />
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
