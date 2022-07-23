import styles from "../ListsLayouts";

const ListsLayout = () => {
  const number = [1, 2, 3, 4];
  return (
    <div>
      <h2>Lists</h2>
      {number.map((item, index) => {
        return (
          <div style={{ background: index % 2 === 0 ? "red" : "blue" }}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ListsLayout;
