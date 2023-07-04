import Text from "../../../../components /Text";

import { ReactComponent as LocationIcon } from "../../../../assets/icons/location.svg";

import styles from "./Location.module.scss";
import Link from "../../../../components /Link";

const Location = () => {
  return (
    <Link href='' className={styles.Container}>
      <LocationIcon className={styles.LocationIcon} />
      <Text className={styles.LocationName} tag='h5'>
        Calgary, AB
      </Text>
    </Link>
  );
};

export default Location;
