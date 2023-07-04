type Variant = "top" | "right" | "bottom" | "left";

export type Props = {
  children: React.ReactNode;
  tooltipText: string;
  variant?: Variant;
};
