import { useState } from "react";

import { Props } from "./NavBar.types";

import Link from "../../../../components /Link";
import Text from "../../../../components /Text";
import Switch from "../../../../components /Switch";
import Menu from "../../../../components /Menu";
import { ReactComponent as MenuIcon } from "../../../../assets/icons/menu.svg";

import { breakpoints } from "../../../../constants/responsive";

import styles from "./NavBar.module.scss";

const navLinks = [
  { title: "About", href: "" },
  { title: "Contact Me", href: "" },
].map(({ href, title }) => (
  <Link className={styles.NavLink} href={href}>
    <Text tag='h6' className={styles.LinkName}>
      {title}
    </Text>
  </Link>
));

const NavBar = ({ currentWidth, isDarkTheme, toggleTheme }: Props) => {
  const { tablet } = breakpoints;

  const isDesktop = currentWidth >= tablet;

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const onTriggerClick = () => setMenuOpen(!isMenuOpen);
  const onMenuClose = () => setMenuOpen(false);

  const content = [
    ...navLinks,
    <Switch
      label={isDesktop ? "" : "theme"}
      labelClassName={styles.LinkName}
      className={styles.NavLink}
      isDarkTheme={isDarkTheme}
      toggleTheme={toggleTheme}
    />,
  ];

  return (
    <div className={styles.Nav}>
      {isDesktop ? (
        content
      ) : (
        <Menu
          isOpen={isMenuOpen}
          onClose={onMenuClose}
          triggerElem={<MenuIcon onClick={onTriggerClick} />}
        >
          {content}
        </Menu>
      )}
    </div>
  );
};

export default NavBar;
