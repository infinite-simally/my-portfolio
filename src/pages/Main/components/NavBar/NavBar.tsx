import { useState } from "react";

import { Props } from "./NavBar.types";

import Link from "../../../../components /Link/Link";
import Text from "../../../../components /Text/Text";
import Switch from "../../../../components /Switch/Switch";
import Menu from "../../../../components /Menu/Menu";
import { ReactComponent as MenuIcon } from "../../../../assets/icons/menu.svg";

import { breakpoints } from "../../../../constants/responsive";

import { clsx } from "clsx";
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

  const themeSwitch = (
    <Switch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
  );

  const content = [...navLinks, themeSwitch];

  const mobileContent = [
    ...navLinks,
    <div className={clsx(styles.NavLink, styles.SwitchContainer)}>
      <Text tag='p' className={styles.LinkName}>
        Theme
      </Text>{" "}
      {themeSwitch}
    </div>,
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
          {mobileContent}
        </Menu>
      )}
    </div>
  );
};

export default NavBar;
