import { ReactComponent as DarkThemeIcon } from "../../assets/icons/dark-theme.svg";
import { ReactComponent as LightThemeIcon } from "../../assets/icons/light-theme.svg";

import { SwitchProps } from "./Switch.types";

import "./Switch.css";

const Switch = ({ isDarkTheme, toggleTheme }: SwitchProps): JSX.Element => {
  console.log(isDarkTheme);
  return (
    <label className='gui-switch'>
      {isDarkTheme ? (
        <DarkThemeIcon className='theme-icon-dark' />
      ) : (
        <LightThemeIcon className='theme-icon-light' />
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
