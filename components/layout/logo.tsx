import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Teddy Bui mark — the "<tb/>" code-bracket logo, drawn as vector text in the
 * current colour (black on light surfaces, `text-cream` on dark ones). Size it
 * by height (`h-*`) since the mark is wider than it is tall.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 24"
      className={cn("h-4 w-auto", className)}
      role="img"
      aria-label="Teddy Bui"
    >
      <text
        x="30"
        y="13"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
        fontSize="20"
        fontWeight="500"
        letterSpacing="0.5"
        fill="currentColor"
      >
        {"<tb/>"}
      </text>
    </svg>
  );
}
