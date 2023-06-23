import DecorativeLine from "../../../../components /DecorativeLine/DecorativeLine";
import Text from "../../../../components /Text/Text";

import { ReactComponent as LinkedinIcon } from "../../../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../../../assets/icons/github.svg";

import colors from "../../../../styles/color-variables.module.scss";
import styles from "./Header.module.scss";

const Header = () => {
  const decorLineColor = colors.decorLinesColor;

  return (
    <div className={styles.Container}>
      <DecorativeLine
        color={decorLineColor}
        height='8rem'
        linePosition={{ top: "2rem" }}
      />
      <DecorativeLine
        rotate='90deg'
        color={decorLineColor}
        height='2.5rem'
        linePosition={{ top: "0.75rem", left: "1.25rem" }}
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
      <DecorativeLine
        color={decorLineColor}
        height='2rem'
        linePosition={{ top: "13.5rem" }}
      />
      <GithubIcon className={styles.GhIcon} />
    </div>
  );
};

export default Header;
