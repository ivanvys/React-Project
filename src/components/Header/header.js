import ROUTE_NAMES from "../../router/routeNames";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";

const Header = () => {
  const array = Object.entries(ROUTE_NAMES).map((item) => {
    return (
      <Link className={styles.menuItem} key={item[1]} to={item[1]}>
        {startCase(capitalize(item[0]))}
      </Link>
    );
  });

  return <div>{array}</div>;
};

export default Header;
