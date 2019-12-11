import React from "react";
import "./App.css";
import Categories from "./components/jokes";
import RandomJoke from "./components/randomJoke";

const App = () => {
  const [category, setCategory] = React.useState("dev");
  const handleCategoryChange = React.useCallback(newCategory => {
    setCategory(newCategory);
  }, []);

  return (
    <div className="App">
      <Categories handleCategoryChange={handleCategoryChange} />
      <RandomJoke category={category} />
    </div>
  );
};

export default App;
