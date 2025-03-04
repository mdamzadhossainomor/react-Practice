import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState(""); // Initial state is an empty string

  const handleChange = (event) => {
    setText(event.target.value); // Update state with input value
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}

export default TextInput;
