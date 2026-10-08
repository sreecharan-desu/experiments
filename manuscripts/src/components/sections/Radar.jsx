import IconWell from "@/components/ui/IconWell";
import Kicker from "@/components/ui/Kicker";

const nodes = [
  { label: "Urban Hub", dotClassName: "bg-secondary", className: "top-8 left-16 sm:left-24" },
  { label: "Rural Synapse", dotClassName: "bg-primary-container", className: "right-12 bottom-12 sm:right-20" },
];

export default function Radar() {
  return (
    <div className="relative flex items-center justify-center py-12 lg:col-span-6">
      <div className="relative flex h-[340px] w-[340px] items-center justify-center sm:h-[460px] sm:w-[460px]">
        <div className="absolute inset-0 animate-[pulse_5s_ease-in-out_infinite] rounded-full border border-secondary/15" />
        <div className="absolute inset-10 rounded-full border border-secondary/25 sm:inset-14" />
        <div className="absolute inset-20 flex items-center justify-center rounded-full border border-secondary/40 bg-surface-container-low/50 p-6 text-center shadow-sm backdrop-blur-sm sm:inset-28 sm:p-8">
          <div className="flex flex-col items-center">
            <IconWell
              name="location_on"
              className="mb-3 h-12 w-12 rounded-full bg-surface-container-lowest text-secondary shadow-sm"
              iconClassName="text-[24px]"
            />
            <p className="text-center font-headline-sm text-body-md leading-snug font-medium text-primary">
              Based in the heart <br />
              of India’s communities.
            </p>
            <Kicker size="sm" className="mt-2">
              HQ: Guntur, Andhra Pradesh
            </Kicker>
          </div>
        </div>
        {nodes.map((node) => (
          <span
            key={node.label}
            className={`absolute flex items-center rounded-full bg-surface-container-lowest px-2.5 py-1 shadow-sm ${node.className}`}
          >
            <Kicker size="sm" tone="ink" dot dotSize="sm" dotClassName={node.dotClassName} gap="gap-1.5">
              {node.label}
            </Kicker>
          </span>
        ))}
        <Kicker size="xs" tone="outline" className="absolute -bottom-4">
          16.3067° N, 80.4365° E • Bharat Grid
        </Kicker>
      </div>
    </div>
  );
}
