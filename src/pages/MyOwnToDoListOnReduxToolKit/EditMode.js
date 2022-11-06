import { useState, useCallback } from "react";

const EditMode = ({ text, id, handletodoSwitch, handletodoEdit }) => {
  const [form, setForm] = useState({ editText: text });

  const handleForm = useCallback((event) => {
    const { value, name } = event.target;
    setForm((state) => {
      return { ...state, [name]: value };
    });
  }, []);

  return (
    <div>
      <input
        value={form.editText}
        name="editText"
        autoFocus
        onChange={handleForm}
      ></input>
      <button
        onClick={() => {
          handletodoEdit({ id, updatedText: form.editText });
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          handletodoSwitch(id);
        }}
      >
        Decline
      </button>
    </div>
  );
};

export default EditMode;
