import React, { useState } from "react";
import "./App.css";

function App() {
  // State to keep track of inputs
  const [inputs, setInputs] = useState([""]);
  const [sortedWords, setSortedWords] = useState([]);

  // Function to handle changes in input
  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  // Function to add more input fields
  const addInputField = () => {
    setInputs([...inputs, ""]);
  };

  // Function to sort the input values
  const sortWords = () => {
    const allWords = inputs
      .map((input) => input.trim()) // Remove extra spaces
      .filter((input) => input !== "") // Remove empty inputs
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    setSortedWords(allWords);
  };

  return (
    <div className="App">
      <h1>Sort Words/Sentences Alphabetically</h1>

      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Enter word or sentence"
          />
        </div>
      ))}

      <button onClick={addInputField}>Add More Input</button>
      <button onClick={sortWords}>Sort Alphabetically</button>

      <h2>Sorted Words/Sentences:</h2>
      <ul>
        {sortedWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
