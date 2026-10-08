import Brand from "@/components/ui/Brand";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { links, nav } from "@/data/site";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-surface/85 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Brand tagline />
        <nav className="hidden items-center gap-space-lg lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 font-label-nav text-label-nav font-semibold text-on-surface-variant uppercase transition-colors hover:text-on-surface"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-space-md">
          <div className="hidden sm:contents">
            <Button href={links.contact} variant="compact" arrow="→" arrowClassName="text-xs">
              Get in Touch
            </Button>
          </div>
       
        </div>
      </Container>
    </header>
  );
}
