import carImage from "../../components/Cat/static/cat.jpg";
import style from "./index.module.css";

const Cat = () => {
  return (
    <div className={style.wripper}>
      <img src={carImage} width={100} height={100}></img>
    </div>
  );
};

export default Cat;
