import { brand, links } from "@/data/site";
import { cn } from "@/lib/cn";
import Kicker from "./Kicker";

export default function Brand({ tagline = false }) {
  return (
    <a href={links.top} className="flex items-center gap-space-sm">
      <img alt={brand.logo.alt} className="h-8 w-auto object-contain" src={brand.logo.src} />
      {/* <span className={cn("flex-col", tagline ? "hidden sm:flex" : "flex")}>
        <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-primary">
          {brand.name}
        </span>
        {tagline ? <Kicker>{brand.tagline}</Kicker> : null}
      </span> */}
    </a>
  );
}
