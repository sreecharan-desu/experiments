import { cn } from "@/lib/cn";

const tones = {
  secondary: "text-secondary",
  muted: "text-on-surface-variant",
  ink: "text-on-surface",
  outline: "text-outline",
  inherit: "",
};

const sizes = {
  md: "text-label-kicker",
  sm: "text-[10px]",
  xs: "text-[11px]",
};

const dotSizes = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
};

export default function Kicker({
  children,
  tone = "secondary",
  size = "md",
  dot = false,
  dotSize = "md",
  dotClassName = "bg-secondary",
  gap = "gap-2",
  className,
}) {
  const label = (
    <span className={cn("font-label-kicker font-bold uppercase", sizes[size], tones[tone], className)}>
      {children}
    </span>
  );

  if (!dot) return label;

  return (
    <span className={cn("inline-flex items-center", gap)}>
      <span className={cn("shrink-0 rounded-full", dotSizes[dotSize], dotClassName)} aria-hidden="true" />
      {label}
    </span>
  );
}
