import { CSSProperties } from "react";

export type Props = {
  tag?: string;
  children: string | React.ReactNode;
  style?: CSSProperties;
  className?: string;
};
