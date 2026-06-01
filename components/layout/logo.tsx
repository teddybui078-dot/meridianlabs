import * as React from "react";
import { cn } from "@/lib/utils";

/** Meridian mark — a solid warm-green four-point spark. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-[22px]", className)}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="meridian-mark" x1="2" y1="2" x2="22" y2="22">
          <stop offset="0%" stopColor="#bfea90" />
          <stop offset="55%" stopColor="#97dd5e" />
          <stop offset="100%" stopColor="#57ab2c" />
        </linearGradient>
      </defs>
      <path
        d="M12 0.5C12.7 6.6 17.4 11.3 23.5 12C17.4 12.7 12.7 17.4 12 23.5C11.3 17.4 6.6 12.7 0.5 12C6.6 11.3 11.3 6.6 12 0.5Z"
        fill="url(#meridian-mark)"
      />
    </svg>
  );
}
