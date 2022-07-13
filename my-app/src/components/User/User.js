import styles from "./user.module.css";

const User = (props) => {
  console.log(props);
  return (
    <div className={styles.wrapper}>
      <p> {props.name} </p>
      <p>{props.age}</p>
    </div>
  );
};

export default User;
