import { useState } from "react";

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
  
  
  const [itemActive, setItemActive] = useState(null); // 1 valor inicial del estado - 2 actualizacion del estado

  const isActive = (itemNumber) => itemNumber === itemActive;

  const koders = [
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "URL VALIDA",
    },
    {
      firstName: "Nestor",
      lastName: "Ramírez",
      age: 40,
      gender: "m",
      photoURL: "URL VALIDA",
    },
    {
      firstName: "David",
      lastName: "Romero",
      age: 28,
      gender: "m",
      photoURL: "URL VALIDA",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "m",
      photoURL: "URL VALIDA",
    },
  ];


  const kodersData = koders.map((koder, index)=> (
    <ul id="Tabla" key={index}>
     
      <li id="foto" >{"foto:"}{koder.photoURL}</li>
      <li >{"Nombre:"} {koder.firstName} {koder.lastName}</li>
      <span></span>
      <li >{"Edad:"} {koder.age}</li>
      <span></span>
      <li>{"Genero:"} {koder.gender}</li>
        
    </ul>
    

  ))




  const animals = ["parrot", "dog", "breaver", "cat"];
  const animalsUI = animals.map((animal, index) => (
    <li key={index}>{animal}</li>
  ));
  console.log(animalsUI);

  
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

 

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Aaron"></Title>
        <FullName firstName="Luis" lastName="Vera"></FullName>

        <p>Counter: {count}</p>
        <button onClick={() => handleClick(true)}>Increase</button>
        <button onClick={() => handleClick(false)}>Decrease</button>
      </header>
     
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

          <ul>{animalsUI}</ul>
         
      
          <div className="Nombres">
          <br></br>
          <ul>
            <ul>{kodersData}</ul>
          </ul>
          <br></br>
          </div>
         

        </header>
      )}
    </div>
  );
}
export default App;