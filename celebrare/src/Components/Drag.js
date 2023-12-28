import React, { useState } from "react";
import Draggable from "react-draggable";

const FontChanger = ({ onChangeFont }) => {
  const fontOptions = ["Arial", "Times New Roman", "Courier New", "Verdana"];

  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    onChangeFont(selectedFont);
  };

  return (
    <div class="container" style={{ marginTop: "10px" }}>
      <label htmlFor="font">Select Font: </label>
      <br />
      <select
        id="font"
        onChange={handleFontChange}
        style={{ marginLeft: "10px" }}
      >
        {fontOptions.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

const App = () => {
  const [text, setText] = useState("");
  const [font, setFont] = useState("Arial");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontChange = (selectedFont) => {
    setFont(selectedFont);
  };

  return (
    <div>
      {/* Draggable text box */}
      <Draggable>
        <div
          style={{
            width: "150px",
            height: "50px",
            backgroundColor: "#ddd",
            padding: "10px",
            position: "absolute",
            top: "400px",
            left: "200px",
            cursor: "move",
            fontFamily: font,
          }}
        >
          {text}
        </div>
      </Draggable>

      {/* Input to change text */}
      <div class="container" style={{ marginTop: "10px" }}>
        <label htmlFor="text">Add Text: </label>
        <br />
        <input
          type="text"
          id="text"
          value={text}
          onChange={handleTextChange}
          style={{ marginLeft: "10px" }}
        />
      </div>

      {/* Font changer */}
      <FontChanger onChangeFont={handleFontChange} />
    </div>
  );
};

export default App;
