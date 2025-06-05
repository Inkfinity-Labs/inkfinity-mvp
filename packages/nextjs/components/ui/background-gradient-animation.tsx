"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const BackgroundGradientAnimation = ({
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  containerClassName,
}: {
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const { theme } = useTheme();

  // Theme-specific colors
  const darkColors = {
    start: "rgb(0, 0, 0)",
    end: "rgb(20, 20, 20)",
    first: "0, 0, 0",
    second: "80, 80, 80",
    third: "120, 120, 120",
    fourth: "160, 160, 160",
  };

  const lightColors = {
    start: "rgb(255, 255, 255)",
    end: "rgb(240, 240, 240)",
    first: "255, 255, 255",
    second: "180, 180, 180",
    third: "140, 140, 140",
    fourth: "100, 100, 100",
  };

  const colors = theme === "dark" ? darkColors : lightColors;

  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      colors.start,
    );
    document.body.style.setProperty("--gradient-background-end", colors.end);
    document.body.style.setProperty("--first-color", colors.first);
    document.body.style.setProperty("--second-color", colors.second);
    document.body.style.setProperty("--third-color", colors.third);
    document.body.style.setProperty("--fourth-color", colors.fourth);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [theme, colors, size, blendingValue]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] pointer-events-none",
        containerClassName,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("pointer-events-none", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg pointer-events-none",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]",
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`,
            `pointer-events-none`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`,
            `pointer-events-none`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`,
            `pointer-events-none`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-100`,
            `pointer-events-none`,
          )}
        ></div>
      </div>
    </div>
  );
};
