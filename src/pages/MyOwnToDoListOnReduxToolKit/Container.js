import { useSelector, useDispatch } from "react-redux";
import {
  createTodo,
  resetTodo,
  completeTodo,
  switchTodo,
  deleteTodo,
  editModeTodo,
} from "../MyOwnToDoListOnReduxToolKit/reducers";
import { useState, useCallback, useMemo } from "react";
import { mytoDoSelectors } from "./selectors";
import ReadMode from "./ReadMode";
import EditMode from "./EditMode";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SORT_OPTIONS } from "./config";
import { SORT_SCENARIOS } from "./config";

const ContainerToDo = () => {
  const todo = useSelector(mytoDoSelectors);
  const dispatch = useDispatch();

  const [form, setForm] = useState({ todoText: "" });
  const [searchingForm, setSearchingForm] = useState({ seachingTodoText: "" });
  const [aZ, setAz] = useState(SORT_OPTIONS.DEFAULT);

  const handleForm = useCallback((event) => {
    const { value, name } = event.target;
    setForm((state) => {
      return { ...state, [name]: value };
    });
  }, []);

  const handleFormSearchingTodo = useCallback((event) => {
    const { value, name } = event.target;
    setSearchingForm((state) => {
      return { ...state, [name]: value };
    });
  }, []);

  const handleCreateTodo = useCallback(
    (event) => {
      event.preventDefault();
      setForm({ todoText: "" });
      if (form.todoText.length > 3) {
        const newForm =
          form.todoText[0].toUpperCase() +
          form.todoText.slice(1, form.todoText.length);
        dispatch(createTodo(newForm));
      }
    },
    [form.todoText]
  );

  const handleResetTodo = useCallback(() => {
    dispatch(resetTodo());
  }, [dispatch]);

  const handleToDoDelete = useCallback(
    (id) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const handleTodoComplete = useCallback(
    (id) => {
      dispatch(completeTodo(id));
    },
    [dispatch]
  );

  const handletodoSwitch = useCallback(
    (id) => {
      dispatch(switchTodo(id));
    },
    [dispatch]
  );

  const handletodoEdit = useCallback(
    ({ id, updatedText }) => {
      dispatch(editModeTodo({ id, updatedText }));
    },
    [dispatch]
  );

  const seachingTodo = useMemo(() => {
    return todo.filter((item) => {
      const arrayOfText = item.text.split(" ");
      return arrayOfText.find((element) => {
        if (
          element
            .toLowerCase()
            .slice(0, searchingForm.seachingTodoText.length) ===
          searchingForm.seachingTodoText.toLowerCase()
        ) {
          return item;
        }
      });
    });
  }, [todo, searchingForm]);

  const handleSort = useCallback((event) => {
    setAz(event.target.value);
  }, []);

  const setAlphabet = useMemo(() => {
    if (SORT_SCENARIOS[aZ] === "COMPLETE") {
      const copy = [...seachingTodo];
      return copy.filter((item) => item.isComptele === true);
    }
    if (SORT_SCENARIOS[aZ] === "NOT_COMPLETE") {
      const copy = [...seachingTodo];
      return copy.filter((item) => item.isComptele === false);
    }
    if (SORT_SCENARIOS[aZ]) {
      const copy = [...seachingTodo];
      return copy.sort(SORT_SCENARIOS[aZ]);
    }

    return seachingTodo;
  }, [seachingTodo, aZ]);

  return (
    <div>
      <h3>Search todo:</h3>
      <input
        value={searchingForm.seachingTodoText}
        name="seachingTodoText"
        onChange={handleFormSearchingTodo}
      ></input>
      <h3>Sort todo:</h3>
      <InputLabel id="demo-simple-select-label">Sort</InputLabel>
      <Select
        defaultValue={SORT_OPTIONS.DEFAULT}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={aZ}
        label="Sort"
        onChange={handleSort}
      >
        <MenuItem value={SORT_OPTIONS.DEFAULT}>Default</MenuItem>
        <MenuItem value={SORT_OPTIONS.ASC}>A-Z</MenuItem>
        <MenuItem value={SORT_OPTIONS.DESK}>Z-A</MenuItem>
        <MenuItem value={SORT_OPTIONS.COMPLETE}>Completed Todo</MenuItem>
        <MenuItem value={SORT_OPTIONS.NOT_COMPLETE}>
          Not Completed Todo
        </MenuItem>
      </Select>
      <h3>Todo:</h3>
      <form onSubmit={handleCreateTodo}>
        <input
          value={form.todoText}
          onChange={handleForm}
          name="todoText"
        ></input>
        <button>Create Task</button>
      </form>
      <button onClick={handleResetTodo}>Reset all tasks</button>
      <div>
        {setAlphabet.map((item, index) => {
          return item.isEditMode ? (
            <EditMode
              key={item.id}
              id={item.id}
              text={item.text}
              handletodoEdit={handletodoEdit}
              handletodoSwitch={handletodoSwitch}
            />
          ) : (
            <ReadMode
              isComptele={item.isComptele}
              key={item.id}
              text={item.text}
              index={index + 1}
              id={item.id}
              handleToDoDelete={handleToDoDelete}
              handleTodoComplete={handleTodoComplete}
              handletodoSwitch={handletodoSwitch}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContainerToDo;
