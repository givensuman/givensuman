import { cn } from "../utils/cn";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Glass(props: Props) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg flex items-center justify-center",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
