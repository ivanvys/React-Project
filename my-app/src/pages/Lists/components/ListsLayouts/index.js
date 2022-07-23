import PropTypes from "prop-types";
import User from "../../../../USEFUL_REACT/User";
import styles from "../ListsLayouts";

const ListsLayout = ({
  user,
  handleUserDelete,
  handleUserAdd,
  handleOnAgeSet,
}) => {
  return (
    <div>
      <h2>Lists</h2>
      <button onClick={handleUserAdd}>Add</button>
      <div>
        {user.map((user) => {
          return (
            <User
              onDelete={handleUserDelete}
              id={user.id}
              key={user.id}
              name={user.name}
              age={user.age}
              onAgeSet={handleOnAgeSet}
            />
          );
        })}
      </div>
    </div>
  );
};

ListsLayout.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, age: PropTypes.number })
  ),
};

export default ListsLayout;
