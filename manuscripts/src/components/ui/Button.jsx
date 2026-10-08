import { cn } from "@/lib/cn";

const variants = {
  primary:
    "group inline-flex items-center gap-3 rounded-full bg-primary-container px-8 py-3.5 font-label-button text-label-button font-semibold text-on-primary uppercase shadow-sm transition-all duration-300 hover:bg-primary hover:shadow-lg",
  compact:
    "inline-flex items-center gap-space-xs rounded bg-primary-container px-space-md py-space-sm font-label-button text-label-button font-semibold text-on-primary uppercase transition-colors hover:bg-primary",
  underline:
    "group relative inline-flex flex-col py-1 font-label-button text-label-button font-semibold tracking-widest text-on-surface uppercase",
  ghost:
    "inline-flex items-center gap-2 font-label-button text-label-button font-semibold text-primary-container uppercase transition-colors group-hover:text-secondary",
  mint: "inline-flex shrink-0 items-center justify-center rounded-full bg-secondary-container px-8 py-3.5 font-label-button text-label-button font-semibold text-on-secondary-container uppercase transition-colors hover:bg-secondary-fixed",
};

export default function Button({
  href,
  variant = "primary",
  arrow,
  arrowClassName = "text-base transition-transform group-hover:translate-x-1",
  className,
  children,
  type,
  ...props
}) {
  const classes = cn(variants[variant], className);
  const content =
    variant === "underline" ? (
      <>
        <span className="transition-colors group-hover:text-secondary">{children}</span>
        <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-75 bg-secondary transition-transform group-hover:scale-x-100" />
      </>
    ) : (
      <>
        {children}
        {arrow ? (
          <span className={arrowClassName} aria-hidden="true">
            {arrow}
          </span>
        ) : null}
      </>
    );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {content}
    </button>
  );
}
