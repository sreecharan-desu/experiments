import { cn } from "@/lib/cn";
import Icon from "./Icon";

export default function IconWell({ name, className, iconClassName }) {
  return (
    <span className={cn("inline-flex items-center justify-center", className)}>
      <Icon name={name} className={iconClassName} />
    </span>
  );
}
