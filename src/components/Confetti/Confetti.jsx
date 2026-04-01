import { useEffect, useRef } from "react";
import "./Confetti.css";

const CONFETTI_COLORS = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#FF922B",
  "#CC5DE8",
];
const SHAPES = ["rect", "circle", "line"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function Confetti() {
  const pieces = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: randomBetween(2, 98),
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    shape: SHAPES[i % SHAPES.length],
    size: randomBetween(5, 11),
    delay: randomBetween(0, 1.8),
    duration: randomBetween(2.5, 4),
    rotate: randomBetween(0, 360),
  }));

  return (
    <div className="confetti-container" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className={`confetti-piece confetti-${p.shape}`}
          style={{
            left: `${p.x}%`,
            backgroundColor: p.color,
            width: p.shape === "line" ? `${p.size * 1.8}px` : `${p.size}px`,
            height: p.shape === "line" ? `${p.size * 0.35}px` : `${p.size}px`,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "rect" ? "2px" : "999px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}