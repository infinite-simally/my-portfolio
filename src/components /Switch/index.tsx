import Text from "../Text";

import { ReactComponent as DarkThemeIcon } from "../../assets/icons/dark-theme.svg";
import { ReactComponent as LightThemeIcon } from "../../assets/icons/light-theme.svg";

import { SwitchProps } from "./Switch.types";

import styles from "./Switch.module.scss";
import clsx from "clsx";

const Switch = ({
  isDarkTheme,
  toggleTheme,
  label,
  labelClassName,
}: SwitchProps): JSX.Element => {
  return (
    <label className={styles.Switch}>
      <Text tag='p' className={clsx(labelClassName, styles.Label)}>
        {label}
      </Text>
      <div className={styles.IconsContainer}>
        {isDarkTheme ? (
          <DarkThemeIcon className={styles.DarkThemeIcon} />
        ) : (
          <LightThemeIcon className={styles.LightThemeIcon} />
        )}
      </div>
      <input
        checked={!isDarkTheme}
        type='checkbox'
        role='switch'
        onChange={toggleTheme.bind(null)}
      />
    </label>
  );
};

export default Switch;
