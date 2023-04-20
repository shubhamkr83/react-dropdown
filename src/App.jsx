import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {

  const option = ["Java", "C", "C++", "Python", "MEAN", "MERN"];

  return (
    <div className="App">
      {/* Question */}
      <h1>Which is your favourite Technology</h1>
      {/* Dropdown Component */}
      <div className="dropdown_comp">
        <Dropdown options={option} />
        <Dropdown options={option} />
      </div>

    </div>
  );
}

export default App;