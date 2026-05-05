import { useMemo } from "react";

export function Confetti({ count = 40 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 6,
        size: 6 + Math.random() * 8,
        color: ["var(--primary)", "var(--primary-glow)", "var(--gold)", "var(--accent)"][
          Math.floor(Math.random() * 4)
        ],
        rounded: Math.random() > 0.5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.6,
            background: p.color,
            borderRadius: p.rounded ? "999px" : "2px",
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
          className="absolute top-0 opacity-80"
        />
      ))}
    </div>
  );
}
