import styles from "./user.module.css";

const User = ({ name, age }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.letters}> {name} </p>
      <p className={styles.numbers}> {age} </p>
    </div>
  );
};

export default User;
