import styles from "../ReduxToDoListLayout/styles.module.scss";

const ReduxToDoListLayout = ({
  id,
  text,
  handleDeleteTask,
  handleIsComplete,
  handleEditeTask,
}) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <p className={styles.bussines}>{text}</p>
      </div>
      <button onClick={() => handleDeleteTask(id)}>Delete</button>
      <button onClick={() => handleIsComplete(id)}>Done!</button>
      <button onClick={() => handleEditeTask(id)}>Edit</button>
    </div>
  );
};

export default ReduxToDoListLayout;
