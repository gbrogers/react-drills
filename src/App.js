// import React, { Component } from "react";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//This one is from Reese
// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

// function App(props) {
//   const stuffArr = ["tacos", "cake", "pizza", "burger", "Cheez Its", "Tea"];

//   return (
//     <div className="App">
//       <h1>Heres a list of stuff!!!</h1>
//       <ul>
//         {stuffArr.map((thing) => (
//           <ListItem value={thing} />
//         ))}
//       </ul>
//     </div>
//   );
// }

//this one doesn't work yet
// const App = () => {
//   const [items, setItems] = useState([]);

//   setItems(["spaghetti", "ice cream", "sushi", "bologna", "cheese"]);

//   const getList = (items) => {
//     items.map((spot) => <h2>{spot}</h2>);
//   };
//   return <div>{getList(items)}</div>;
// };

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       items: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
//     };
//   }

//   makeHTML = () => {
//     return this.state.items.map((spot) => <h2>{spot}</h2>);
//   };

//   render() {
//     return <div>{this.makeHTML()}</div>;
//   }
// }

export default App;
