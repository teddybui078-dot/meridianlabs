"use client";

import { usePathname } from "next/navigation";
import { BGPattern } from "@/components/ui/bg-pattern";

/**
 * Single site-wide background (rendered once in the root layout). The green
 * gradient only shows on the home page; every other route gets a plain white
 * background with the same subtle dot pattern. Fixed behind all content.
 */
export function SiteBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {isHome && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #f5efe2 0%, #efe6d4 34%, #e3d4b6 74%, #d8c8a6 100%)",
          }}
        />
      )}
      <BGPattern
        variant="dots"
        mask="fade-center"
        size={22}
        fill="rgba(22,18,13,0.1)"
        className="z-0"
      />
    </div>
  );
}
