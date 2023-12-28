// ColorPicker.jsx
import React from "react";

const ColorPicker = ({ onChange }) => {
  const colorOptions = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    onChange(selectedColor);
  };

  return (
    <div class="container" style={{ marginTop: "10px" }}>
      <label htmlFor="color">Select Color: </label>
      <br />
      <select
        id="color"
        onChange={handleColorChange}
        style={{ marginLeft: "10px" }}
      >
        {colorOptions.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorPicker;
