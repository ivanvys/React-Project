import style from "./App.module.css";
import { summ, summ2 } from "./someJs";
import User from "./components/User/User";
import Kek from "./components/Cat/index";
const App = (props) => {
  // User - это объект
  return (
    <div className={style.wripper}>
      <Kek />
      <User name="Vanya" age={summ(8, 20)} />
      <User name="Alex" age={summ2(5, 5)} />
      <User name="Oleg" age={10} />
      <User name="Alex" age={10} />
    </div>
  );
};

export default App;
