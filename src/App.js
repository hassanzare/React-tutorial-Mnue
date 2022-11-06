import "./App.css";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";
import { useState } from "react";

const App = () => {
  const [menuItems, setMenuItems] = useState(items);

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
