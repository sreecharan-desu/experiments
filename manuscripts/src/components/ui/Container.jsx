import { cn } from "@/lib/cn";

const widths = {
  page: "max-w-[1380px]",
  quote: "max-w-[1080px]",
};

export default function Container({ width = "page", className, children }) {
  return <div className={cn("mx-auto w-full px-gutter", widths[width], className)}>{children}</div>;
}
