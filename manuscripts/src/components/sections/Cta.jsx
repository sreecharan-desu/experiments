import AccessForm from "@/components/forms/AccessForm";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Cta() {
  return (
    <Section id="contact" className="pb-space-xl lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-on-primary shadow-2xl sm:p-14 lg:p-20">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
          <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary-container/60 blur-3xl" />

          <div className="relative z-10 flex max-w-3xl flex-col items-start">
            <Badge className="mb-6 bg-on-primary/10 px-3 py-1 text-secondary-fixed" dotClassName="bg-secondary-fixed">
              Join the Civil Movement
            </Badge>
            <Heading tone="inverse" className="mb-6 leading-tight">
              Build the future of human living with us.
            </Heading>
            <p className="mb-10 max-w-2xl font-body-lg text-body-lg leading-relaxed font-light text-outline-variant">
              Whether you are a merchant seeking digital resilience, a caregiver desiring institutional
              dignity, or a civic partner — the Kabuka ecosystem is ready for your story.
            </p>
            <AccessForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
