type Variant =
  | "top"
  | "topLeft"
  | "topRight"
  | "right"
  | "rightTop"
  | "rightBottom"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "left"
  | "leftTop"
  | "leftBottom";

export type Props = {
  children: React.ReactNode;
  tooltipText: string;
  variant?: Variant;
};
