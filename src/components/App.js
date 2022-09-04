import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import HeaderToggleMode from "./Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <HeaderToggleMode onDarkModeClick={handleDarkModeClick} mode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
