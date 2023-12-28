import "./App.css";
import Navbar from "./Components/Navbar";
import RUbuttons from "./Components/RUbuttons";
import Drag from "./Components/Drag.js";
import ColorPicker from "./Components/ColorPicker";

function App() {
  return (
    <>
      <Navbar title="Celebrare" />
      <RUbuttons />
      <Drag />
      <ColorPicker onChangeColor="selectedColor" />
    </>
  );
}

export default App;
