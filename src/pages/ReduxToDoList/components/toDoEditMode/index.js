import { useForm } from "../../../../customHooks";
import styles from "../toDoReadMode/styles.module.scss";

const ToDoEditMode = ({ id, text, handleToDoSave, handleToDoDecline }) => {
  const { state, hundleFromChange } = useForm({
    editText: text,
  });

  return (
    <div className={styles.wrapper}>
      <input
        name="editText"
        value={state.editText}
        type="text"
        onChange={hundleFromChange}
      />
      <button
        onClick={() => {
          handleToDoSave({ id, updatedText: state.editText });
        }}
      >
        Confirm
      </button>
      <button
        onClick={() => {
          handleToDoDecline(id);
        }}
      >
        Decline
      </button>
    </div>
  );
};

export default ToDoEditMode;
