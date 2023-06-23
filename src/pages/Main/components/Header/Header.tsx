import DecorativeLine from "../../../../components /DecorativeLine/DecorativeLine";
import Text from "../../../../components /Text/Text";

import { ReactComponent as LinkedinIcon } from "../../../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../../../assets/icons/github.svg";

import colors from "../../../../styles/color-variables.module.scss";
import styles from "./Header.module.scss";
import Link from "../../../../components /Link/Link";

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

      <Text tag='h1' className={styles.NameLogo}>
        Yana Kortelova
      </Text>

      <Link
        className={styles.InIcon}
        href='https://www.linkedin.com/in/yana-kortelova/'
      >
        <LinkedinIcon />
      </Link>
      <DecorativeLine
        color={decorLineColor}
        height='2rem'
        linePosition={{ top: "13.5rem" }}
      />
      <Link
        className={styles.GhIcon}
        href='https://github.com/infinite-simally'
      >
        <GithubIcon />
      </Link>
    </div>
  );
};

export default Header;
