import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Kicker from "@/components/ui/Kicker";
import Section from "@/components/ui/Section";
import { pledges } from "@/data/site";
import Radar from "./Radar";

export default function Vision() {
  return (
    <Section id="vision" className="bg-surface py-space-xl lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col lg:col-span-6">
            <div className="mb-3">
              <Kicker dot>Our Commitment</Kicker>
            </div>
            <Heading className="mb-12 leading-tight tracking-tight">
              Pledging a new <br className="hidden sm:inline" />
              <span className="text-secondary">level of living.</span>
            </Heading>
            <div className="flex flex-col gap-10">
              {pledges.map((pledge) => (
                <div key={pledge.index} className="group flex items-start gap-6">
                  <span
                    className={`pt-0.5 font-headline-sm text-body-lg italic ${pledge.accent ? "text-secondary" : "text-on-surface-variant"}`}
                  >
                    {pledge.index}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="mb-1 font-headline-sm text-body-lg font-semibold text-primary transition-colors group-hover:text-secondary">
                      {pledge.title}
                    </h3>
                    <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">{pledge.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Radar />
        </div>
      </Container>
    </Section>
  );
}
