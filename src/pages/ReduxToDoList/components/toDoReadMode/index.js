import styles from "../toDoReadMode/styles.module.scss";

const ToDoReadMode = ({
  id,
  text,
  handleToDoComplete,
  handleToDoDelete,
  handleToDoToggle,
  isComplete,
}) => {
  return (
    <div className={styles.wrapper}>
      <p style={{ textDecoration: isComplete ? "line-through" : "none" }}>
        {text}
      </p>
      <div>
        {!isComplete && (
          <>
            <button
              onClick={() => {
                handleToDoComplete(id);
              }}
            >
              Complete
            </button>
            <button
              onClick={() => {
                handleToDoToggle(id);
              }}
            >
              Edit
            </button>
          </>
        )}
        <button
          onClick={() => {
            handleToDoDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoReadMode;
