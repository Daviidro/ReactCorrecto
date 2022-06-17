import { useEffect, useState } from "react";

import "./App.css";

// Components
import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  // Local state
  // [0] = valor del state
  // [1] = función que actualiza el state
  // si `useState` recibe un argumento, este será el valor inicial del estado
  // si no el estado es undefined
  const [count, setCount] = useState(0);
  console.log(count, "COUNT");
  console.log(setCount, "SET_COUNT");
  const [isLoading, setIsLoading] = useState(true);
  const [itemActive, setItemActive] = useState(null);

  const isActive = (itemNumber) => itemNumber === itemActive;

  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
  };
  console.log(itemActive);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Aaron"></Title>
        <FullName firstName="Luis" lastName="Vera"></FullName>

        <p>Counter: {count}</p>
        <button onClick={() => handleClick(true)}>Increase</button>
        <button onClick={() => handleClick(false)}>Decrease</button>
      </header>
      {isLoading ? (
        "Esta cargando"
      ) : (
        <header className="App-header">
          <ul>
            <li
              onClick={() => setItemActive(1)}
              className={`${isActive(1) ? "active" : "inactive"}`}
            >
              Texto 1
            </li>
            <li
              onClick={() => setItemActive(2)}
              className={`${isActive(2) ? "active" : "inactive"}`}
            >
              Texto 2
            </li>
            <li
              onClick={() => setItemActive(3)}
              className={`${isActive(3) ? "active" : "inactive"}`}
            >
              Texto 3
            </li>
            <li
              onClick={() => setItemActive(4)}
              className={`${isActive(4) ? "active" : "inactive"}`}
            >
              Texto 4
            </li>
            <li
              onClick={() => setItemActive(5)}
              className={`${isActive(5) ? "active" : "inactive"}`}
            >
              Texto 5
            </li>
          </ul>
        </header>
      )}
    </div>
  );
}
export default App;