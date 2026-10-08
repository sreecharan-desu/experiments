import { links } from "@/data/site";
import { cn } from "@/lib/cn";
import Button from "./Button";
import IconWell from "./IconWell";
import Kicker from "./Kicker";

const tones = {
  commerce: {
    well: "bg-primary-fixed/40 text-primary-container",
    kicker: "muted",
  },
  services: {
    well: "bg-secondary-container/50 text-secondary",
    kicker: "secondary",
  },
  care: {
    well: "bg-primary-fixed-dim/30 text-primary-container",
    kicker: "secondary",
  },
};

export default function FeatureCard({ index, title, kicker, icon, tone, body, href = links.contact, action = "Learn more" }) {
  const style = tones[tone];

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-8 shadow-sm transition-all duration-300 hover:shadow-xl lg:p-10">
      <div>
        <div className="mb-8 flex items-start justify-between">
          <IconWell
            name={icon}
            className={cn("h-14 w-14 rounded-2xl transition-transform group-hover:scale-110", style.well)}
            iconClassName="text-[28px]"
          />
          <span className="font-headline-sm text-body-md font-light text-on-surface-variant italic">{index}</span>
        </div>
        <h3 className="mb-1 font-headline-sm text-headline-sm font-semibold text-primary">{title}</h3>
        <Kicker tone={style.kicker} className="mb-6 inline-block">
          {kicker}
        </Kicker>
        <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">{body}</p>
      </div>
      <div className="mt-8 border-t border-surface-container pt-10">
        <Button href={href} variant="ghost" arrow="›">
          {action}
        </Button>
      </div>
    </article>
  );
}
