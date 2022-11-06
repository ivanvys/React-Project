import { useDispatch } from "react-redux";
import { useForm } from "../../../customHooks/useForm";
import { signInLoad } from "../SignInReducer/SignInReducer";
import { useSelector } from "react-redux";
import { logOut } from "../SignInReducer/SignInReducer";
import { useCallback } from "react";
import Spinner from "../../../components/Spinner";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.signInLoad);

  const { state, hundleFromChange, hundleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInLoad(state));
    hundleReset();
  };

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Please, type the email"
          onChange={hundleFromChange}
          value={state.email}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Please, type the password"
          onChange={hundleFromChange}
          value={state.password}
        ></input>
        <button>Sign in</button>
      </form>
      <button onClick={handleLogOut}>Sign out</button>
      {isLoading ? (
        <Spinner style={{ position: "absolute", top: "50%", left: "50%" }} />
      ) : (
        error
      )}
    </div>
  );
};

export default SignInContainer;
