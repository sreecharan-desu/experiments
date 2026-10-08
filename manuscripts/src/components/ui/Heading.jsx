import { cn } from "@/lib/cn";

const tones = {
  primary: "text-primary",
  inverse: "text-on-primary",
};

export default function Heading({ as: Tag = "h2", tone = "primary", className, children }) {
  return (
    <Tag className={cn("font-headline-lg text-headline-md font-bold md:text-headline-lg", tones[tone], className)}>
      {children}
    </Tag>
  );
}
