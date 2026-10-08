import { cn } from "@/lib/cn";
import Kicker from "./Kicker";

export default function Badge({ children, className, dot = true, dotClassName = "bg-current" }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full", className)}>
      {dot ? <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", dotClassName)} aria-hidden="true" /> : null}
      <Kicker tone="inherit">{children}</Kicker>
    </span>
  );
}
