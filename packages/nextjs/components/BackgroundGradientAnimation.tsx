"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface BackgroundGradientAnimationProps {
  size?: string;
  blendingValue?: string;
  className?: string;
  containerClassName?: string;
}

export function BackgroundGradientAnimation({
  size = "50%",
  blendingValue = "soft-light",
  className,
  containerClassName,
}: BackgroundGradientAnimationProps) {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setTgX(e.clientX);
      setTgY(e.clientY);
    });

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const gradientAnimation = () => {
      setCurX((prev) => prev + (tgX - prev) * 0.2);
      setCurY((prev) => prev + (tgY - prev) * 0.2);

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const gradient = context.createRadialGradient(
        curX,
        curY,
        0,
        curX,
        curY,
        parseInt(size) || 500,
      );

      gradient.addColorStop(0, "#7775D6");
      gradient.addColorStop(1, "#E935C1");

      context.filter = `blur(50px) brightness(1.5) ${blendingValue}(0.7)`;
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      window.requestAnimationFrame(gradientAnimation);
    };

    window.requestAnimationFrame(gradientAnimation);
  }, [size, blendingValue, tgX, tgY]);

  return (
    <div className={cn("fixed inset-0 -z-10", containerClassName)}>
      <canvas ref={canvasRef} className={cn("h-full w-full", className)} />
    </div>
  );
}
