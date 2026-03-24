import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

export type ButtonType = "primary" | "secondary" | "tertiary";
export type ButtonColor = "brand" | "error" | "warning" | "positive" | "neutral";
export type ButtonSize = "desktop" | "mobile";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  colorTheme?: ButtonColor;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const COLOR_MAP = {
  brand: {
    gradient: "linear-gradient(260.965deg, rgb(39, 153, 250) 0%, rgb(4, 99, 200) 75%)",
    hoverOverlay: "rgba(243, 245, 249, 0.15)",
    activeOverlay: "rgba(33, 33, 33, 0.15)",
    border: "#1f72ff",
    hoverBorder: "#1686fd",
    activeBorder: "#104ae6",
    text: "white",
  },
  error: {
    gradient: "linear-gradient(260.965deg, rgb(239, 68, 68) 0%, rgb(185, 28, 28) 75%)",
    hoverOverlay: "rgba(243, 245, 249, 0.15)",
    activeOverlay: "rgba(33, 33, 33, 0.15)",
    border: "#dc2626",
    hoverBorder: "#ef4444",
    activeBorder: "#991b1b",
    text: "white",
  },
  warning: {
    gradient: "linear-gradient(260.965deg, rgb(234, 138, 43) 0%, rgb(180, 83, 9) 75%)",
    hoverOverlay: "rgba(243, 245, 249, 0.15)",
    activeOverlay: "rgba(33, 33, 33, 0.15)",
    border: "#d97706",
    hoverBorder: "#ea8a2b",
    activeBorder: "#92400e",
    text: "white",
  },
  positive: {
    gradient: "linear-gradient(260.965deg, rgb(52, 211, 153) 0%, rgb(5, 150, 105) 75%)",
    hoverOverlay: "rgba(243, 245, 249, 0.15)",
    activeOverlay: "rgba(33, 33, 33, 0.15)",
    border: "#10b981",
    hoverBorder: "#34d399",
    activeBorder: "#047857",
    text: "white",
  },
  neutral: {
    gradient: "linear-gradient(to bottom, rgba(243,245,249,0.1), rgba(243,245,249,0.05))",
    hoverOverlay: "rgba(243, 245, 249, 0.05)",
    activeOverlay: "rgba(33, 33, 33, 0.1)",
    border: "rgba(243,245,249,0.03)",
    hoverBorder: "rgba(243,245,249,0.07)",
    activeBorder: "rgba(243,245,249,0.02)",
    text: "white",
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    colorTheme = "brand", 
    size = "desktop", 
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    children,
    ...props 
  }, ref) => {
    const colors = COLOR_MAP[colorTheme];
    const h = size === "desktop" ? 32 : 40;
    
    // We'll handle hover states via group-hover in Tailwind to keep it CSS-only
    const bgBase = variant === "tertiary" 
      ? "transparent" 
      : variant === "secondary" 
        ? "linear-gradient(to bottom, rgba(243,245,249,0.1), rgba(243,245,249,0.05))"
        : colors.gradient;

    const hoverOverlay = variant === "tertiary" 
      ? "rgba(255,255,255,0.05)" 
      : variant === "secondary"
        ? "rgba(243,245,249,0.05)"
        : colors.hoverOverlay;

    const activeOverlay = variant === "tertiary" 
      ? "rgba(255,255,255,0.1)" 
      : variant === "secondary"
        ? "rgba(33, 33, 33, 0.05)"
        : colors.activeOverlay;

    const borderBase = variant === "tertiary" ? "transparent" : variant === "secondary" ? "rgba(243,245,249,0.03)" : colors.border;
    const borderHover = variant === "tertiary" ? "transparent" : variant === "secondary" ? "rgba(243,245,249,0.07)" : colors.hoverBorder;
    const borderActive = variant === "tertiary" ? "transparent" : variant === "secondary" ? "rgba(243,245,249,0.02)" : colors.activeBorder;

    const textColor = (variant === "tertiary" || variant === "secondary")
      ? (colorTheme === "brand" ? "#1DAAFB" : colorTheme === "error" ? "#ef4444" : colorTheme === "warning" ? "#ea8a2b" : colorTheme === "positive" ? "#34d399" : "rgba(255,255,255,0.7)")
      : colors.text;

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(
          clsx(
            "relative rounded-[4px] shrink-0 inline-flex items-center justify-center align-middle group cursor-pointer overflow-hidden",
            "transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a] focus-visible:ring-[#5ab0fa]",
            (disabled || isLoading) && "opacity-50 cursor-not-allowed",
            className
          )
        )}
        style={{
          height: h,
          minWidth: 144,
          // Setup CSS vars for the pseudo elements
          "--btn-bg-default": bgBase,
          "--btn-hover-overlay": hoverOverlay,
          "--btn-active-overlay": activeOverlay,
          "--btn-border-default": borderBase,
          "--btn-border-hover": borderHover,
          "--btn-border-active": borderActive,
          fontFamily: "'Segoe UI', Tahoma, sans-serif",
          color: textColor,
        } as React.CSSProperties}
        {...props}
      >
        {/* Base background fill */}
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: variant === "tertiary" ? "none" : "var(--btn-bg-default)" }} 
        />
        
        {/* Hover overlay layer */}
        <div 
          className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-active:opacity-0"
          style={{ backgroundColor: "var(--btn-hover-overlay)" }} 
        />

        {/* Active overlay layer */}
        <div 
          className="absolute inset-0 transition-opacity duration-200 opacity-0 group-active:opacity-100"
          style={{ backgroundColor: "var(--btn-active-overlay)" }} 
        />

        {/* Content */}
        <div className="flex gap-[8px] h-full items-center justify-center px-[8px] relative z-10 w-full">
          {isLoading ? (
            <Loader2 size={16} className="animate-spin text-current" />
          ) : (
            <>
              {leftIcon && <span className="flex items-center justify-center size-[16px]">{leftIcon}</span>}
              <span className="font-[600] text-[12px] leading-[16px] text-center whitespace-nowrap">
                {children}
              </span>
              {rightIcon && <span className="flex items-center justify-center size-[16px]">{rightIcon}</span>}
            </>
          )}
        </div>

        {/* Border Layer */}
        {variant !== "tertiary" && (
          <>
            <div 
              className="absolute inset-0 rounded-[4px] pointer-events-none transition-colors duration-200 border border-solid border-[var(--btn-border-default)] group-hover:border-[var(--btn-border-hover)] group-active:border-[var(--btn-border-active)] z-20"
            />
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";


