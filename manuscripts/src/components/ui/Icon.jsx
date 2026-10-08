import { cn } from "@/lib/cn";

export default function Icon({ name, className }) {
  return (
    <span className={cn("material-symbols-outlined", className)} aria-hidden="true">
      {name}
    </span>
  );
}
