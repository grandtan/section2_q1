import "./styles.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [dropdown, setDropdown] = useState("isPrime");
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (dropdown === "isPrime") setStatus(isPrime(input));
    else setStatus(isFibonacci(input));
  }, [input, dropdown]);

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  const isFibonacci = (num) => {
    let a = 5 * Math.pow(num, 2) + 4;
    let b = 5 * Math.pow(num, 2) - 4;
    const result = Math.sqrt(a) % 1 === 0;
    const res = Math.sqrt(b) % 1 === 0;
    return result || res === true;
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) > 0 ? Math.round(e.target.value) : 1;
    console.log(value);
    setInput(value);
  };

  const handleChangeSelect = (e) => {
    const value = e.target.value;
    setDropdown(value);
  };

  // console.log(status);
  return (
    <div className="App">
      <div id="main-container">
        <div id="left-content">
          <input type="number" style={{ width: 200 }} onChange={handleChange} />
        </div>

        <div id="center-content">
          <select
            style={{ width: 200 }}
            onChange={handleChangeSelect}
            value={dropdown}
          >
            <option value="isPrime">isPrime</option>
            <option value="isFibonacci">isFibonacci</option>
          </select>
        </div>

        <div id="right-content">{"" + status}</div>
      </div>
    </div>
  );
};

export default App;
