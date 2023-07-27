interface CSSPositionOffsets {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

type LinePosition = CSSPositionOffsets;

export type Props = {
  size?: string;
  color?: string;
  height: string;
  lineStyle?: "solid";
  linePosition?: LinePosition;
  opacity?: number;
  rotate?: string;
  position?: string;
};
