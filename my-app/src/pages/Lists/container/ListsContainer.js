import ListsLayout from "../components/ListsLayouts";
import { mockUsers } from "../mock";
import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

const ListsContainer = () => {
  const [users, setUsers] = useState([]); //<-----передаем начальное значение
  const handleUserDelete = useCallback((id) => {
    setUsers((state) => {
      const copyUsers = [...state]; //<---нужно создавать копию, чтобы с ней рабоать (нельзя работать с состоянием оригинальным)
      const itemIndexToRemove = copyUsers.findIndex((user) => user.id === id);
      copyUsers.splice(itemIndexToRemove, 1);
      return copyUsers;
    });
  }, []); //<--- без привязки к юзерам, чтобы каждый раз не создавалась новая функция

  const handleUserAdd = useCallback(() => {
    setUsers((state) => {
      const usersCopy = [...state];

      const newUser = {
        id: uuid(),
        name: `${uuid()}`,
        age: Math.floor(Math.random() * 100),
      };

      usersCopy.push(newUser);
      return usersCopy;
    });
  }, []);

  const handleOnAgeSet = useCallback((id) => {
    setUsers((state) => {
      const stateCopy = [...state];

      const userToUpdate = stateCopy.find((user) => user.id === id);

      userToUpdate.age = 100;
      return stateCopy;
    });
  }, []);
  return (
    <ListsLayout
      user={users}
      handleUserDelete={handleUserDelete}
      handleUserAdd={handleUserAdd}
      handleOnAgeSet={handleOnAgeSet}
    />
  );
};

export default ListsContainer;
