import Text from "../../../../components /Text/Text";

import { ReactComponent as LocationIcon } from "../../../../assets/icons/location.svg";

import styles from "./Location.module.scss";

const Location = () => {
  return (
    <div className={styles.Container}>
      <LocationIcon />
      <Text className={styles.LocationName} tag='h4'>
        Calgary, AB
      </Text>
    </div>
  );
};

export default Location;
