import styles from "../pages/Lists/components/ListsLayouts/styles.module.scss";
import { memo } from "react";
const User = ({ name, age, onDelete, id, onAgeSet }) => {
  return (
    <div className={styles.users}>
      <p>Name: {name}</p>
      <p> Age: {age}</p>
      <button onClick={() => onDelete(id)}>DELETE</button>
      <button onClick={() => onAgeSet(id)}>set 100 years</button>
    </div>
  );
};

export default memo(User);
