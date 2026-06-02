/**
 * Full-page background for the home route. Fixed behind all content so the
 * hero and footer sit on one continuous gradient with no seam.
 */
export function HomeBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            // aurora of green blooms rising from the bottom + clean white top
            "radial-gradient(58% 48% at 16% 104%, rgba(120,226,140,0.50), transparent 60%)," +
            "radial-gradient(54% 46% at 88% 98%, rgba(16,178,118,0.46), transparent 58%)," +
            "radial-gradient(95% 75% at 50% 122%, rgba(28,191,101,0.55), transparent 64%)," +
            "linear-gradient(180deg, #ffffff 0%, #f5fdf9 40%, rgba(28,191,101,0.05) 74%, rgba(28,191,101,0.10) 100%)",
        }}
      />
      <div
        className="grid-overlay absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(125% 100% at 50% 28%, black 32%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(125% 100% at 50% 28%, black 32%, transparent 88%)",
        }}
      />
    </div>
  );
}
