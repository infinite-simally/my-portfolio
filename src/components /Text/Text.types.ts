export type Props = {
  tag: string;
  fontSize?: number | string;
  children: string | React.ReactNode;
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
