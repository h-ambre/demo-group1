import { useState } from "react";
import "./App.css";
import Title from "./components/title";
import MyTurtle from "./components/imgTurtle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Title />
      <div>
        <MyTurtle />
      </div>
      <div className="counter-turtle">
        <button onClick={() => setCount((count) => count + 1)}>
          You gave {count} salad to the turtle
        </button>
        <p>🥬 Give salad to the turtle ! 🥬</p>
      </div>
      <p className="read-the-docs">She's very hungry, go quick !</p>
    </div>
  );
}

export default App;
