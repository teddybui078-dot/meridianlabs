export type ProjectStatus = "Live" | "Beta" | "Building";

export type Project = {
  slug: string;
  name: string;
  category: string;
  oneLiner: string;
  description: string;
  status: ProjectStatus;
  year: number;
  href: string;
  featured?: boolean;
  metric?: { value: string; label: string };
};

/**
 * Placeholder catalog — swap names/copy freely. Order here is the canonical
 * display order; `featured` entries surface on the home page.
 */
export const projects: Project[] = [
  {
    slug: "lumen",
    name: "Lumen",
    category: "Research copilot",
    oneLiner: "Turns a messy reading list into a structured brief.",
    description:
      "Lumen reads your sources, traces the claims back to the line, and writes a brief you can actually defend in a seminar. Built for students drowning in tabs.",
    status: "Live",
    year: 2025,
    href: "https://example.com",
    featured: true,
    metric: { value: "40hrs", label: "saved / month" },
  },
  {
    slug: "draft",
    name: "Draftsmith",
    category: "Writing engine",
    oneLiner: "An on-device editor that rewrites in your own voice.",
    description:
      "Draftsmith sharpens sentences, fixes grammar, and keeps the rhythm of how you actually write. Nothing leaves the machine.",
    status: "Live",
    year: 2025,
    href: "https://example.com",
    featured: true,
    metric: { value: "78ms", label: "median latency" },
  },
  {
    slug: "stipend",
    name: "Stipend",
    category: "Funding finder",
    oneLiner: "Matches founders and students to grants worth applying for.",
    description:
      "Stipend scans thousands of grants, scholarships and accelerators, then ranks the handful you'd actually win — with a draft application to start from.",
    status: "Beta",
    year: 2026,
    href: "https://example.com",
    featured: true,
    metric: { value: "$2.4M", label: "funding matched" },
  },
  {
    slug: "atlas",
    name: "Atlas",
    category: "Knowledge base",
    oneLiner: "A second brain that answers in your team's words.",
    description:
      "Atlas indexes everything your studio knows and answers questions with citations, so onboarding a new builder takes an afternoon instead of a month.",
    status: "Beta",
    year: 2026,
    href: "https://example.com",
    featured: true,
    metric: { value: "12k", label: "docs indexed" },
  },
  {
    slug: "ledger",
    name: "Ledger",
    category: "Finance agent",
    oneLiner: "Reads receipts, reconciles books, flags the weird stuff.",
    description:
      "Ledger is a finance agent for early teams — it categorises spend, reconciles statements, and surfaces the one transaction that doesn't belong.",
    status: "Building",
    year: 2026,
    href: "https://example.com",
  },
  {
    slug: "signal",
    name: "Signal",
    category: "Launch analytics",
    oneLiner: "Tells you which launch metric actually matters this week.",
    description:
      "Signal cuts through dashboards and tells a founder the single number to move next, with the experiment to move it. Built to be read in 30 seconds.",
    status: "Building",
    year: 2026,
    href: "https://example.com",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
