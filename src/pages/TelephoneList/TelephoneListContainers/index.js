import { useCallback, useState } from "react";
import TelephoneListComponent from "../TelephoneListComponents";
import { v4 as uuid } from "uuid";

const TelephoneListContainer = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [phoneList, setPhoneList] = useState([]);

  const handleAddInfo = useCallback((event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm((state) => {
      return { ...state, [name]: value };
    });
  }, []);

  const hundleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (form.name.length > 3 && form.phone.length > 3) {
        setForm({ name: "", phone: "" });
        setPhoneList((state) => {
          const newName = {
            id: uuid(),
            name: form.name,
            phone: form.phone,
            isEditMode: false,
          };
          return [...state, newName];
        });
      }
    },
    [form]
  );

  const handleRemovePerson = useCallback((id) => {
    setPhoneList((state) => {
      const copyPhoneList = [...state];
      const foundPersonIndex = copyPhoneList.findIndex(
        (item) => item.id === id
      );
      copyPhoneList.splice(foundPersonIndex, 1); //<---splice мутирует, и это удаленный элемент
      return copyPhoneList; //<--- это уже массив без элемента
    });
  }, []);

  const handleChangeMode = useCallback((id) => {
    setPhoneList((state) => {
      const copyPhoneList = [...state];
      const foundPerson = copyPhoneList.find((item) => item.id === id);
      foundPerson.isEditMode = true;
      return copyPhoneList;
    });
  }, []);

  const handleSaveTextInEditMode = useCallback((id, newName, newPhone) => {
    if (newName.length > 3 && newPhone.length > 3) {
      setPhoneList((state) => {
        const copyPhoneList = [...state];
        const foundPerson = copyPhoneList.find((item) => item.id === id);
        foundPerson.name = newName;
        foundPerson.phone = newPhone;
        foundPerson.isEditMode = false;
        return copyPhoneList;
      });
    }
  }, []);

  const handleDeclineTextInEditMode = useCallback((id) => {
    setPhoneList((state) => {
      const copyPhoneList = [...state];
      const foundPerson = copyPhoneList.find((item) => item.id === id);
      foundPerson.isEditMode = false;
      return copyPhoneList;
    });
  }, []);

  return (
    <div>
      <TelephoneListComponent
        form={form}
        phoneList={phoneList}
        handleAddInfo={handleAddInfo}
        hundleSubmit={hundleSubmit}
        handleRemovePerson={handleRemovePerson}
        handleChangeMode={handleChangeMode}
        handleSaveTextInEditMode={handleSaveTextInEditMode}
        handleDeclineTextInEditMode={handleDeclineTextInEditMode}
      />
    </div>
  );
};

export default TelephoneListContainer;
