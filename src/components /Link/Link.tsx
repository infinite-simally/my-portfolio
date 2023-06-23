import { Props } from "./Link.types";

import "./Link.css";

const Link = ({ children, href, className }: Props) => {
  return (
    <a href={href} className={className} target='_blank'>
      {children}
    </a>
  );
};

export default Link;
