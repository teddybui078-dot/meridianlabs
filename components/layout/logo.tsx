import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The mark — an angular "M" of twin peaks with a rising circuit-step leg.
 * The source art is green, so `brightness-0` renders it solid black to fit the
 * beige/cream + black palette. On dark surfaces, pass `invert` to flip it light.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/meridianlabs-logo.png"
      alt="Teddy Bui"
      width={88}
      height={88}
      priority
      className={cn("size-[22px] object-contain brightness-0", className)}
    />
  );
}
