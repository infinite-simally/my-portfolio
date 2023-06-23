import { ReactComponent as DarkThemeIcon } from "../../assets/icons/dark-theme.svg";
import { ReactComponent as LightThemeIcon } from "../../assets/icons/light-theme.svg";

import { SwitchProps } from "./Switch.types";

import styles from "./Switch.module.scss";

const Switch = ({ isDarkTheme, toggleTheme }: SwitchProps): JSX.Element => {
  console.log(isDarkTheme);
  return (
    <label className={styles.Switch}>
      {isDarkTheme ? (
        <DarkThemeIcon className={styles.DarkThemeIcon} />
      ) : (
        <LightThemeIcon className={styles.LightThemeIcon} />
      )}
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
