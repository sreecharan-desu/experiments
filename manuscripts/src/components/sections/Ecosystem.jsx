import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import Heading from "@/components/ui/Heading";
import Kicker from "@/components/ui/Kicker";
import Section from "@/components/ui/Section";
import { pillars } from "@/data/site";

export default function Ecosystem() {
  return (
    <Section id="ecosystem" className="bg-surface py-space-xl lg:py-32">
      <Container>
        <div className="mb-16 flex flex-col md:mb-20">
          <div className="mb-3">
            <Kicker dot>The Moat</Kicker>
          </div>
          <Heading className="tracking-tight">Kabuka Ecosystem</Heading>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <FeatureCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
