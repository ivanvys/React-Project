import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  ISCOMPLETE_TASK,
  RESET_ALL_TASKS,
} from "../actions";
import ReduxToDoListLayout from "../ReduxToDoListLayout/ReduxToDoListLayout";
import { useForm } from "../../../customHooks";
import { toDoSelectors } from "../../ReduxCounters/Selectors/selectors";

const ReduxToDoListContainer = () => {
  const mainToDoList = useSelector(toDoSelectors);
  const dispatch = useDispatch();
  const { state, hundleImput } = useForm({
    text: "",
  });

  const hundleSubmit = (event) => {
    event.preventDefault();
    console.log(state.text);
  };

  const handleCreateTask = () => {
    dispatch(CREATE_TASK());
  };

  const handleResetAllTasks = () => {
    dispatch(RESET_ALL_TASKS());
  };

  const handleDeleteTask = (id) => {
    dispatch(DELETE_TASK(id));
  };

  const handleIsComplete = (id) => {
    dispatch(ISCOMPLETE_TASK(id));
  };

  const handleEditeTask = (id) => {
    dispatch(EDIT_TASK(id));
  };

  return (
    <div>
      <h2>To do list:</h2>
      <form onSubmit={hundleSubmit}>
        <p>
          <input
            onChange={hundleImput}
            value={state.text}
            type="text"
            name="text"
          />
        </p>
        <button onClick={handleCreateTask} type="submit">
          Create a task
        </button>
        <button onClick={handleResetAllTasks}>Reset all tasks</button>
        <div>
          {mainToDoList.map(({ id, text }) => {
            return (
              <ReduxToDoListLayout
                id={id}
                text={text}
                key={id}
                handleDeleteTask={handleDeleteTask}
                handleIsComplete={handleIsComplete}
                handleEditeTask={handleEditeTask}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default ReduxToDoListContainer;
