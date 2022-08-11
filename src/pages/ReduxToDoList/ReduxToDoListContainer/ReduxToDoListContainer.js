import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_TASK,
  DELETE_TASK,
  ISCOMPLETE_TASK,
  RESET_ALL_TASKS,
  TOGGLE_TASK,
  EDIT_TASK,
  SORT_TASKS,
  PREVIOUS_STATE,
} from "../actions";
import { useForm } from "../../../customHooks";
import { toDoSelectors, toDoSelectorsPrev } from "../Selectors/selectors";
import ToDoReadMode from "../components/toDoReadMode";
import ToDoEditMode from "../components/toDoEditMode";
import { useCallback, useState, useMemo } from "react";

const ReduxToDoListContainer = () => {
  const prev = useSelector(toDoSelectorsPrev);
  const todoshki = useSelector(toDoSelectors);
  const dispatch = useDispatch();
  const { state, hundleFromChange, hundleReset } = useForm({
    todoText: "",
  });
  const [formState, setFormState] = useState("");

  const handleInputChange = (event) => {
    setFormState(event.target.value);
  };

  const handleToDoCreate = useCallback(
    (event) => {
      event.preventDefault();
      hundleReset();
      if (
        state.todoText.length >= 3 &&
        state.todoText === state.todoText.trim()
      ) {
        dispatch(CREATE_TASK(state.todoText)); //<-- это будет payload
      }
    },
    [state.todoText]
  );

  const handleToDoReset = useCallback(() => {
    dispatch(RESET_ALL_TASKS());
  }, [dispatch]);

  const handleToDoComplete = useCallback(
    (id) => {
      dispatch(ISCOMPLETE_TASK(id));
    },
    [dispatch]
  );

  const handleToDoDelete = useCallback(
    (id) => {
      dispatch(DELETE_TASK(id));
    },
    [dispatch]
  );

  const handleToDoToggle = useCallback(
    (id) => {
      dispatch(TOGGLE_TASK(id));
    },
    [dispatch]
  );

  const handleToDoSave = useCallback(
    ({ id, updatedText }) => {
      if (updatedText.length >= 3 && updatedText === updatedText.trim()) {
        dispatch(EDIT_TASK({ id, updatedText }));
      }
    },
    [dispatch]
  );

  const handleToDoDecline = useCallback(
    (id) => {
      dispatch(TOGGLE_TASK(id));
    },
    [dispatch]
  );

  const filterTodo = useMemo(() => {
    return todoshki.filter((element) => {
      if (
        element.text.toLowerCase().slice(0, formState.length) ===
        formState.toLowerCase()
      ) {
        return element;
      }
    });
  }, [formState, todoshki]);

  const handleSortTodo = useCallback(() => {
    dispatch(SORT_TASKS());
  }, []);

  const handlePrevious = useCallback(() => {
    dispatch(PREVIOUS_STATE());
  }, []);

  return (
    <div>
      <div>
        <h2>Search field:</h2>
        <input
          value={formState}
          onChange={handleInputChange}
          type="text"
        ></input>
        <button
          onClick={
            prev.length !== 0
              ? JSON.stringify(todoshki) === JSON.stringify(prev)
                ? handleSortTodo
                : handlePrevious
              : null
          }
          style={{ marginLeft: "75px" }}
        >
          Sort complete todo
        </button>
      </div>
      <h2>To do list:</h2>
      <form onSubmit={handleToDoCreate} style={{ display: "inline-block" }}>
        <input
          value={state.todoText}
          onChange={hundleFromChange}
          name="todoText"
        ></input>
        <button>Create Task</button>
      </form>
      <button onClick={handleToDoReset}>Remove all tasks</button>
      <ol>
        {filterTodo.map((item) => {
          return (
            <li key={item.id}>
              {item.isEditMode === false ? (
                <ToDoReadMode
                  text={item.text}
                  id={item.id}
                  handleToDoComplete={handleToDoComplete}
                  handleToDoDelete={handleToDoDelete}
                  handleToDoToggle={handleToDoToggle}
                  isComplete={item.isComplete}
                />
              ) : (
                <ToDoEditMode
                  text={item.text}
                  id={item.id}
                  handleToDoSave={handleToDoSave}
                  handleToDoDecline={handleToDoDecline}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ReduxToDoListContainer;
