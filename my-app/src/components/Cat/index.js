import carImage from "../../components/Cat/static/cat.jpg";
import style from "./index.module.css";

const Cat = (props) => {
  return (
    <div className={style.wrapper}>
      <img className={style.carImage} src={carImage} alt="cat"></img>
    </div>
  );
};

export default Cat;
