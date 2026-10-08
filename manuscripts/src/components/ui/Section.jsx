import { cn } from "@/lib/cn";

export default function Section({ id, className, children }) {
  return (
    <section id={id} className={cn("relative w-full", className)}>
      {children}
    </section>
  );
}
