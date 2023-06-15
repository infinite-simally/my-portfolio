import "./Link.css";

const Link = ({ children, href }: any) => {
  return <a href={href}>{children}</a>;
};

export default Link;
