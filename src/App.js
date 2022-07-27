import React from "react";
import Colors from "./COMPONENTS/Colors";
import Header from "./COMPONENTS/Header";
import { nanoid } from "nanoid";
import Values from "values.js";

function App() {
  const [color, setColor] = React.useState("#123456");
  const [error, setError] = React.useState(false);
  const [colorList, setColorList] = React.useState(
    new Values("#123456").all(10)
  );

  function changeColorValue(event) {
    const inputColor = event.target.value;
    setColor(inputColor);
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <div>
      <Header
        error={error}
        handleSubmit={handleSubmit}
        changeColorValue={changeColorValue}
      />
      <div className="colors-container">
        {colorList.map((c) => {
          return (
            <Colors
              key={nanoid()}
              rgb={c.rgb}
              weight={c.weight}
              hex={c.hexString()}
              class={
                c.type === "tint"
                  ? "dark"
                  : c.type === "shade"
                  ? "light"
                  : "base"
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
