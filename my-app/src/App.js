import "./App.css";
import { summ, summ2 } from "./someJs";
import User from "./components/User/User";
import Cat from "./components/Cat/index";
const App = () => {
  console.log(summ(1, 2));
  console.log(summ2(1, 23));
  // User - это объект
  return (
    <div>
      <User name="Vanya" age={10} />
      <User name="Alex" age={10} />
      <User name="Oleg" age={10} />
      <User name="Alex" age={10} />
      <Cat />
    </div>
  );
};

export default App;
