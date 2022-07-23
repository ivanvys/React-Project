import ROUTE_NAMES from "../../router/routeNames";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";

const Header = () => {
  return (
    <div>
      {Object.entries(ROUTE_NAMES).map(([pageName, path]) => {
        return (
          <Link className={styles.menuItem} key={path} to={path}>
            {startCase(capitalize(pageName))}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
