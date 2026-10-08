import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Quote() {
  return (
    <Section className="overflow-hidden bg-surface-container-low py-space-xl lg:py-28">
      <Container width="quote" className="flex flex-col items-center text-center">
        <div className="mb-6 text-secondary/30" aria-hidden="true">
          <svg className="mx-auto h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote className="mb-8 font-headline-md text-headline-sm leading-snug font-bold text-primary md:text-headline-md md:leading-relaxed">
          “MANUSMRITI is sasthra or science of human living. Science and technology is the underlying
          power of human evolution ever since we started learning life inventions. This inspires us to
          reinvent <span className="font-extrabold text-secondary">classic living</span> through
          technology.”
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-outline-variant" />
          <span className="font-label-button text-label-button font-semibold tracking-widest text-on-surface uppercase">
            Sri — Founder, Manuscripts
          </span>
          <div className="h-px w-8 bg-outline-variant" />
        </div>
      </Container>
    </Section>
  );
}
