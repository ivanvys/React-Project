import { useCallback, useEffect, useState } from "react";
import { useFetching } from "../../../customHooks/useFetching";
import { signUp } from "../api";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../router/routeNames";

const SignUpContainer = () => {
  const navigate = useNavigate();
  const user = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
  };
  const [form, setForm] = useState(user);
  const handleFormChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((state) => {
      return { ...state, [name]: value };
    });
  }, []);
  const handleFormReset = useCallback(() => {
    setForm(user);
  }, []);
  const { data, load, error, hundleDataLoad } = useFetching(
    signUp,
    null,
    false
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      hundleDataLoad(form);
      handleFormReset();
    },
    [form]
  );

  useEffect(() => {
    if (data?.data.success) {
      setTimeout(() => {
        navigate(ROUTE_NAMES.sign_in);
      }, 5000);
    }
  }, [data]);
  console.log(data);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {Object.entries(form).map(([formName, formValue]) => {
          return (
            <input
              style={{ display: "block", marginBottom: "10px" }}
              key={formName}
              name={formName}
              value={formValue}
              type="text"
              onChange={handleFormChange}
              placeholder={`Please type ${formName}`}
            />
          );
        })}
        <button>Create Account</button>
      </form>
      {data?.data.message || error?.response.data.message}
    </div>
  );
};

export default SignUpContainer;
