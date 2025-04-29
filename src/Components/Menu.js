export default function Menu({ menuItems, onAddItems }) {
  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="category">
        <div className="category-title">Appetizers</div>
        {menuItems.map(
          (item) =>
            item.category === "appetizers" && (
              <div className="menu-item" key={item.id}>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-description">{item.description}</div>
                </div>
                <div className="item-price">${item.price}</div>
                <button onClick={() => onAddItems(item)}>Add</button>
              </div>
            )
        )}
      </div>
      <div className="category">
        <div className="category-title">Main Courses</div>
        {menuItems.map(
          (item) =>
            item.category === "mains" && (
              <div className="menu-item" key={item.id}>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-description">{item.description}</div>
                </div>
                <div className="item-price">${item.price}</div>
                <button onClick={() => onAddItems(item)}>Add</button>
              </div>
            )
        )}
      </div>
      <div className="category">
        <div className="category-title">Desserts</div>
        {menuItems.map(
          (item) =>
            item.category === "desserts" && (
              <div className="menu-item" key={item.id}>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-description">{item.description}</div>
                </div>
                <div className="item-price">${item.price}</div>
                <button onClick={() => onAddItems(item)}>Add</button>
              </div>
            )
        )}
      </div>
    </div>
  );
}
