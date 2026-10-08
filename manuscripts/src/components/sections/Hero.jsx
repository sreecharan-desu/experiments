import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { links, stats } from "@/data/site";

const statTones = {
  primary: "text-primary",
  secondary: "text-secondary",
};

export default function Hero() {
  return (
    <Section className="overflow-hidden pb-space-xl lg:pb-32">
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-secondary-container/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-20 -z-10 h-[420px] w-[420px] rounded-full bg-primary-fixed/20 blur-3xl" />

      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center pt-8 text-center md:pt-14">
          <Badge className="mb-8 bg-secondary/10 px-3 py-1 text-secondary">
            Manuscripts • Architecture of Civic Flourishing
          </Badge>

          <h1 className="mb-8 font-display-hero text-headline-lg-mobile font-bold tracking-tight text-primary md:text-display-hero">
            The Science of <br />
            <span className="bg-gradient-to-r from-primary-container via-secondary to-secondary bg-clip-text font-extrabold text-transparent">
              Human Living.
            </span>
          </h1>

          <p className="mb-12 max-w-2xl font-body-lg text-body-lg leading-relaxed font-light text-on-surface-variant">
            Reinventing classic living through technology. A unified civil ecosystem of hyperlocal
            commerce, essential services, and compassionate care designed for human dignity across
            India&apos;s communities.
          </p>

          <div className="mb-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <Button href={links.ecosystem} arrow="→">
              Explore Kabuka
            </Button>
            <Button href={links.story} variant="underline">
              The Ecosystem
            </Button>
          </div>

          <div className="mx-auto grid w-full max-w-xl grid-cols-3 gap-8 border-t border-surface-container-high pt-10 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className={`font-headline-sm text-headline-sm font-medium tracking-tight ${statTones[stat.tone]}`}>
                  {stat.value}
                </span>
                <span className="mt-1 font-body-sm text-[10px] tracking-wider text-on-surface-variant uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
