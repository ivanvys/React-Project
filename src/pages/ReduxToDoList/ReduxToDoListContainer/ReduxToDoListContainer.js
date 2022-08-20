import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  deleteTodo,
  resetTodo,
  isCompleteTodo,
  toggleTodo,
  editTodo,
  sortTodo,
} from "../reducers";
import { useForm } from "../../../customHooks";
import { toDoSelectors, toDoSelectorsPrev } from "../Selectors/selectors";
import ToDoReadMode from "../components/toDoReadMode";
import ToDoEditMode from "../components/toDoEditMode";
import { useCallback, useState, useMemo } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SORT_OPTIONS } from "../config";
import { SORT_SCENARIOS } from "../config";

const ReduxToDoListContainer = () => {
  const prev = useSelector(toDoSelectorsPrev);
  const todoshki = useSelector(toDoSelectors);
  const dispatch = useDispatch();
  const { state, hundleFromChange, hundleReset } = useForm({
    todoText: "",
  });
  const [formState, setFormState] = useState("");
  const [sortOption, setSortOption] = useState(SORT_OPTIONS.DEFAULT);

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
        dispatch(createTodo(state.todoText)); //<-- это будет payload
      }
    },
    [state.todoText]
  );

  const handleToDoReset = useCallback(() => {
    dispatch(resetTodo());
  }, [dispatch]);

  const handleToDoComplete = useCallback(
    (id) => {
      dispatch(isCompleteTodo(id));
    },
    [dispatch]
  );

  const handleToDoDelete = useCallback(
    (id) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const handleToDoToggle = useCallback(
    (id) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  const handleToDoSave = useCallback(
    ({ id, updatedText }) => {
      if (updatedText.length >= 3 && updatedText === updatedText.trim()) {
        dispatch(editTodo({ id, updatedText }));
      }
    },
    [dispatch]
  );

  const handleToDoDecline = useCallback(
    (id) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  const handleSortTodo = useCallback(() => {
    dispatch(sortTodo());
  }, []);

  const handleSort = useCallback((event) => {
    setSortOption(event.target.value);
  }, []);

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

  const sortTodosToRender = useMemo(() => {
    if (SORT_SCENARIOS[sortOption] === "NOT_COMPLETED") {
      const copyTodo = [...filterTodo];
      return copyTodo.filter((item) => item.isComplete === false);
    }

    if (SORT_SCENARIOS[sortOption] === "COMPLETED") {
      const copyTodo = [...filterTodo];
      return copyTodo.filter((item) => item.isComplete === true);
    }

    if (SORT_SCENARIOS[sortOption]) {
      const copyTodo = [...filterTodo];
      return copyTodo.sort(SORT_SCENARIOS[sortOption]);
    }

    return filterTodo;
  }, [filterTodo, sortOption]);

  return (
    <div>
      <div>
        <h2>Search field:</h2>
        <input
          value={formState}
          onChange={handleInputChange}
          type="text"
        ></input>
        <button style={{ marginLeft: "75px" }} onClick={handleSortTodo}>
          Sort to do
        </button>
        <div>
          <h2>Sort by alphabet and complete/not complete</h2>
          <Select
            style={{ width: "300px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortOption}
            defaultValue={SORT_OPTIONS.DEFAULT}
            label="Age"
            onChange={handleSort}
          >
            <MenuItem value={SORT_OPTIONS.DEFAULT}>Default value</MenuItem>
            <MenuItem value={SORT_OPTIONS.ASC}>A-Z</MenuItem>
            <MenuItem value={SORT_OPTIONS.DESC}>Z-A</MenuItem>
            <MenuItem value={SORT_OPTIONS.NOT_COMPLETED}>
              Show outstanding tasks
            </MenuItem>
            <MenuItem value={SORT_OPTIONS.COMPLETED}>
              Show completed tasks
            </MenuItem>
          </Select>
        </div>
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
        {sortTodosToRender.map((item) => {
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
