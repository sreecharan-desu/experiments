import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import IconWell from "@/components/ui/IconWell";
import Kicker from "@/components/ui/Kicker";
import Section from "@/components/ui/Section";

export default function Story() {
  return (
    <Section id="story" className="bg-surface-container-lowest py-space-xl lg:py-32">
      <Container>
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-surface-container-high pb-6">
          <Kicker dot gap="gap-3">
            Kabuka. The Moat
          </Kicker>
          <Kicker tone="muted">Everything for Everyone</Kicker>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-start lg:col-span-5">
            <Heading className="mb-6 leading-tight">
              Rewriting the Story of{" "}
              <span className="text-secondary underline decoration-secondary-container decoration-4 underline-offset-8">
                Connection
              </span>
            </Heading>
            <p className="mb-6 font-body-lg text-body-lg leading-relaxed font-light text-on-surface-variant">
              At Manuscripts, we believe that every community has a story worth telling — but many
              are currently missing the tools to write their best chapters.
            </p>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Our mission is to bridge the gaps between tradition and technology, creating a digital
              infrastructure that feels as intuitive and essential as a village square.
            </p>
            <div className="mt-10 flex items-center gap-4 rounded-2xl bg-surface-container-low p-5">
              <IconWell
                name="explore"
                className="h-10 w-10 rounded-full bg-surface-container text-secondary"
                iconClassName="text-[20px]"
              />
              <div className="flex flex-col">
                <Kicker>Philosophical Mandate</Kicker>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Community as sanctuary, not extraction.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:col-span-7">
            <div className="space-y-6 font-body-md text-body-md leading-relaxed text-on-surface">
              <p>
                We are proud to introduce <strong className="font-semibold text-primary">Kabuka: The Moat</strong>{" "}
                — a comprehensive ecosystem engineered to serve the heartbeat of India, from the
                high-rises of the city to the quiet lanes of the rural heartland.
              </p>
              <p>
                The name <em className="font-headline-sm text-primary italic">“The Moat”</em> signifies
                our commitment to security, community preservation, and resilience. We aren&apos;t just
                building a product; we are cultivating a protective ecosystem that empowers users to
                thrive in an increasingly fragmented world.
              </p>
              <p className="text-on-surface-variant">
                By weaving together commerce, service, and care, Manuscripts is documenting a new era
                of human connection — one where technology doesn&apos;t replace the community, but
                finally learns to serve it.
              </p>
            </div>

            <blockquote className="relative rounded-2xl border-l-4 border-primary-container bg-surface-container-low/80 p-8 shadow-sm md:p-10">
              <Badge dot={false} className="absolute -top-3 right-6 bg-secondary-fixed px-3 py-0.5 text-on-secondary-fixed">
                Living Ethos
              </Badge>
              <p className="font-headline-sm text-body-lg leading-relaxed font-bold text-primary-container md:text-headline-sm">
                “Kabuka isn&apos;t just a platform; it&apos;s the bridge between where we are and where
                we belong — <span className="font-extrabold tracking-tight text-secondary">Everything For Everyone.</span>”
              </p>
            </blockquote>
          </div>
        </div>
      </Container>
    </Section>
  );
}
