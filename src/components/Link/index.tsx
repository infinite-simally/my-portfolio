import { Props } from "./Link.types";

import "./Link.scss";

const Link = ({ children, href, className }: Props) => {
  return (
    <a href={href} className={className} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
};

export default Link;
