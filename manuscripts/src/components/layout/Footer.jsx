import Brand from "@/components/ui/Brand";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Kicker from "@/components/ui/Kicker";
import { contact, footer } from "@/data/site";

function ContactRow({ icon, children }) {
  return (
    <div className="flex items-start gap-space-xs">
      <Icon name={icon} className="mt-1 text-[18px] text-secondary" />
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-space-xl w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
      <Container className="py-space-xl">
        <div className="grid grid-cols-1 gap-space-xl border-b border-outline-variant/30 pb-space-xl md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-space-md lg:col-span-4">
            <Brand />
            <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">{footer.blurb}</p>
            <Kicker dot gap="gap-space-xs">
              {footer.mark}
            </Kicker>
          </div>

          <div className="flex flex-col gap-space-sm lg:col-span-3">
            <Kicker tone="muted">Quick Links</Kicker>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-on-surface transition-colors hover:text-secondary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm lg:col-span-5">
            <Kicker tone="muted">Contact Us</Kicker>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <ContactRow icon="mail">
                <a href={`mailto:${contact.email}`} className="text-on-surface transition-colors hover:text-primary">
                  {contact.email}
                </a>
              </ContactRow>
              <ContactRow icon="call">
                <a href={contact.phoneHref} className="text-on-surface transition-colors hover:text-primary">
                  {contact.phone}
                </a>
              </ContactRow>
              <ContactRow icon="location_on">
                <span className="leading-relaxed">{contact.address}</span>
              </ContactRow>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md pt-space-lg font-body-sm text-body-sm text-on-surface-variant md:flex-row">
          <p>{footer.legal}</p>
          <p className="font-headline-sm text-label-nav font-bold tracking-widest text-secondary uppercase">
            {footer.signoff}
          </p>
        </div>
      </Container>
    </footer>
  );
}
