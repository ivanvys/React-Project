const ReadMode = ({
  text,
  index,
  isComptele,
  id,
  handleToDoDelete,
  handleTodoComplete,
  handletodoSwitch,
}) => {
  const buttonComplete = isComptele ? "Return" : "Complete";
  const textComplete = isComptele ? (
    <h2
      style={{ transition: "1s", filter: "blur(4px)" }}
    >{`${index}. ${text}`}</h2>
  ) : (
    <h2 style={{ transition: "1s" }}>{`${index}. ${text}`}</h2>
  );
  const editIsComplete = isComptele ? (
    <div
      style={{
        display: "inline-block",
        width: "39px",
        height: "22px",
        boxSizing: "border-box",
        position: "relative",
        top: "7px",
      }}
    ></div>
  ) : (
    <button
      onClick={() => {
        handletodoSwitch(id);
      }}
    >
      Edit
    </button>
  );

  return (
    <div>
      {textComplete}
      <button
        onClick={() => {
          handleTodoComplete(id);
        }}
        style={{ width: "73px", cursor: "pointer" }}
      >
        {buttonComplete}
      </button>
      {editIsComplete}
      <button
        onClick={() => {
          handleToDoDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ReadMode;
