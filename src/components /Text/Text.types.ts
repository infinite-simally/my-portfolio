export type Props = {
  type: string;
  fontSize?: number | string;
  children: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: string;
  textDecoration?: string;
  fontVariant?: string;
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "full-width"
    | "full-size-kana";
  className?: string;
};
