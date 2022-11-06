import { useState, useCallback } from "react";

const EditModePhone = ({
  id,
  itemName,
  itemPhone,
  handleSaveTextInEditMode,
  handleDeclineTextInEditMode,
}) => {
  const [form, setForm] = useState({ name: itemName, phone: itemPhone });

  const handleAddNewInfo = useCallback((event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm((state) => {
      return { ...state, [name]: value };
    });
  }, []);

  return (
    <div>
      <form
        onSubmit={() => {
          handleSaveTextInEditMode(id, form.name, form.phone);
        }}
      >
        {Object.entries(form).map(([formName, formValue]) => {
          return (
            <input
              key={formName}
              name={formName}
              value={formValue}
              onChange={handleAddNewInfo}
              type="text"
            />
          );
        })}
        <button>Save</button>
      </form>
      <button
        onClick={() => {
          handleDeclineTextInEditMode(id);
        }}
      >
        Decline
      </button>
    </div>
  );
};

export default EditModePhone;
