import { useForm } from "../../../customHooks";

const FormPresentation = () => {
  const { state, hundleFromChange } = useForm({
    email: "",
    password: "",
  });

  const hundleSubmit = (event) => {
    event.preventDefault();

    console.log(state);
  };

  return (
    <div>
      <div>Forms</div>
      <form onSubmit={hundleSubmit}>
        <p>
          Email:
          <input
            onChange={hundleFromChange}
            value={state.email}
            type="email"
            name="email"
          />
        </p>
        <p>
          Password:
          <input
            onChange={hundleFromChange}
            value={state.password}
            type="password"
            name="password"
          />
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
};

export default FormPresentation;
