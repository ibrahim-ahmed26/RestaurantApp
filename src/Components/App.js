import { useState } from "react";
import Menu from "./Menu";
import Order from "./Order";

const menuItems = [
  {
    id: 1,
    name: "Bruschetta",
    description: "Toasted bread with tomatoes, garlic and basil",
    price: 8.99,
    category: "appetizers",
  },
  {
    id: 2,
    name: "Mozzarella Sticks",
    description: "Breaded and deep-fried mozzarella",
    price: 7.99,
    category: "appetizers",
  },
  {
    id: 3,
    name: "Spaghetti Carbonara",
    description: "Pasta with creamy egg sauce, pancetta and cheese",
    price: 16.99,
    category: "mains",
  },
  {
    id: 4,
    name: "Margherita Pizza",
    description: "Tomato sauce, mozzarella, and fresh basil",
    price: 14.99,
    category: "mains",
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Coffee-flavored Italian dessert",
    price: 7.99,
    category: "desserts",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Molten chocolate cake with vanilla ice cream",
    price: 8.99,
    category: "desserts",
  },
];
export default function App() {
  const [menu, setMenu] = useState([]);
  const [checkout, setCheckOut] = useState(false);
  function toggleCheckOut() {
    setCheckOut((checkout) => !checkout);
  }
  function handleCheckoutPage() {
    setCheckOut(false);
  }
  function addItems(item) {
    setMenu([...menu, item]);
  }
  function removeItems(itemId) {
    setMenu(menu.filter((item) => item.id !== itemId));
  }
  function clearItems() {
    setMenu([]);
  }
  return (
    <div className="app">
      <header>
        <h1>Bella Cucina</h1>
        <p className="tagline">Authentic Italian Experience</p>
      </header>
      <div className="container">
        <Menu menuItems={menuItems} onAddItems={addItems} />
        <Order
          items={menu}
          onRemoveItem={removeItems}
          handleToggle={toggleCheckOut}
          checkoutStatus={checkout}
          onHandleCheckoutPage={handleCheckoutPage}
          onClearItems={clearItems}
        />
      </div>
    </div>
  );
}
