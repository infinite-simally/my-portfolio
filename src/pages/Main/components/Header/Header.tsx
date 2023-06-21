import DecorativeLine from "../../../../components /DecorativeLine/DecorativeLine";
import Text from "../../../../components /Text/Text";

import { ReactComponent as LinkedinIcon } from "../../../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../../../assets/icons/github.svg";

import { Props } from "./Heder.types";

import colors from "../../../../styles/color-variables.module.scss";
import styles from "./Header.module.scss";

const Header = ({ isDarkTheme }: Props) => {
  const decorLineColor = isDarkTheme
    ? colors.lightHeadersColor
    : colors.darkHeadersColor;

  return (
    <div className={styles.Container}>
      <DecorativeLine
        color={decorLineColor}
        height='12rem'
        linePosition={{ top: "2rem" }}
      />
      <DecorativeLine
        rotate='90deg'
        color={decorLineColor}
        height='3rem'
        linePosition={{ top: "0.5rem", left: "1.5rem" }}
      />

      <Text
        tag='h1'
        fontSize='3.25rem'
        fontFamily='"Italiana", sans-serif'
        className={styles.NameLogo}
      >
        Yana Kortelova
      </Text>

      <LinkedinIcon className={styles.InIcon} />
      <GithubIcon className={styles.GhIcon} />
    </div>
  );
};

export default Header;
