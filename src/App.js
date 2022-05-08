import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Link from "./components/Link";

function App() {
  const links = [
    {id: "0", label: "Kaveh", address: "https://reactjs.org"},
    {id: "1", label: "Saeid", address: "https://google.com"},
    {id: "2", label: "Nima", address: "https://react-native.com"},
    {id: "3", label: "Ali", address: "https://facebook.com"},
  ];

  const [count, setCount] = useState("0");
  const [amount, setAmount] = useState("")


  const plus = () => setCount(count + 1);
  const minus = () => (count > 0) && setCount(count - 1);

  const text = (number) => {
    if(count === "0"){
      setCount(number.toString())
    }else{
      setCount(count + number.toString())
    }
  }

  const es6 =  number => setCount(count === "0" ? number.toString() : (count + number.toString()));

  const buttonStyle = {
    width: 100,
    height: 40,
    backgroundColor: '#d1d1d1',
    borderRadius: 5,
    fontSize: 25,
    marginBottom: 10
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Count: {count} </p>
        <button style={buttonStyle} onClick={() => es6(1)}>1</button>
        <button style={buttonStyle} onClick={() => es6(2)}>2</button>
        <button style={buttonStyle} onClick={() => {
          setAmount(count)
          setCount("0")
        }}>+</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          links.map(link => <Link key={link.id} label={link.label} address={link.address}/>)
        }
      </header>
    </div>
  );
}

export default App;
