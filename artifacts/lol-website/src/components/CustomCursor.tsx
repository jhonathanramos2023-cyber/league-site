import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const ringPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      targetPos.current = { x, y };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      }
    };

    const animate = () => {
      const dx = targetPos.current.x - ringPos.current.x;
      const dy = targetPos.current.y - ringPos.current.y;
      ringPos.current.x += dx * 0.18;
      ringPos.current.y += dy * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 14}px, ${ringPos.current.y - 14}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#C8AA6E",
          boxShadow: "0 0 6px #C8AA6E, 0 0 12px #C8AA6E80",
          pointerEvents: "none",
          zIndex: 99999,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1.5px solid #C8AA6E",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: 0.7,
        }}
      />
    </>
  );
}
