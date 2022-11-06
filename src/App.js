import "./App.css";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";
import { useState } from "react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (categories) => {
    if (categories == "all") {
      setMenuItems(items);
    }
    const newItem = items.filter((item) => categories !== item.category);
    setMenuItems(newItem);
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories filterItem={filterItem} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
