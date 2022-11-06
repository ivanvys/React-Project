import EditModePhone from "./EditModePhone.js";

const TelephoneListComponent = ({
  form,
  phoneList,
  handleAddInfo,
  hundleSubmit,
  handleRemovePerson,
  handleChangeMode,
  handleSaveTextInEditMode,
  handleDeclineTextInEditMode,
}) => {
  return (
    <div>
      <div>
        <form onSubmit={hundleSubmit}>
          {Object.entries(form).map(([formName, formValue]) => {
            return (
              <input
                key={formName}
                name={formName}
                value={formValue}
                onChange={handleAddInfo}
                type="text"
                placeholder={`Enter ${formName}`}
              />
            );
          })}
          <button>Create</button>
        </form>
        <div>
          {phoneList.map((item) => {
            return (
              <div key={item.id}>
                {item.isEditMode ? (
                  <EditModePhone
                    id={item.id}
                    itemName={item.name}
                    itemPhone={item.phone}
                    handleSaveTextInEditMode={handleSaveTextInEditMode}
                    handleDeclineTextInEditMode={handleDeclineTextInEditMode}
                  />
                ) : (
                  <div
                    key={item.id}
                    style={{ border: "2px solid black", width: "50%" }}
                  >
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                    <button onClick={() => handleRemovePerson(item.id)}>
                      Remove
                    </button>
                    <button onClick={() => handleChangeMode(item.id)}>
                      Edit
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TelephoneListComponent;
