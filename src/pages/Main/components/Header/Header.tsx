import { Props } from "./Header.types";

import { GITHUB, LINKEDIN } from "../../../../constants/links";

import DecorativeLine from "../../../../components /DecorativeLine/DecorativeLine";
import Text from "../../../../components /Text/Text";
import Link from "../../../../components /Link/Link";

import { ReactComponent as LinkedinIcon } from "../../../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../../../assets/icons/github.svg";

import { breakpoints } from "../../../../constants/responsive";

import colors from "../../../../styles/color-variables.module.scss";
import styles from "./Header.module.scss";
import Tooltip from "../../../../components /Tooltip/Tooltip";

const Header = ({ currentWidth }: Props) => {
  const isMobile = currentWidth < breakpoints.mobile;
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
        {isMobile ? "YK" : "Yana Kortelova"}
      </Text>

      <Link className={styles.InIcon} href={LINKEDIN}>
        <Tooltip tooltipText='Open Linkedin profile' variant='right'>
          <LinkedinIcon />
        </Tooltip>
      </Link>

      <DecorativeLine
        color={decorLineColor}
        height='4rem'
        linePosition={{ top: "13.5rem" }}
      />

      <Link className={styles.GhIcon} href={GITHUB}>
        <Tooltip tooltipText='Open GitHub profile' variant='right'>
          <GithubIcon />
        </Tooltip>
      </Link>
    </div>
  );
};

export default Header;
