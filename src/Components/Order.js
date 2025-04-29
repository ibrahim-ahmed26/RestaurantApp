export default function Order({
  items,
  onRemoveItem,
  handleToggle,
  checkoutStatus,
  onHandleCheckoutPage,
  onClearItems,
}) {
  const total = items
    .reduce((acc, item) => acc + Number(item.price), 0)
    .toFixed(2);
  return (
    <div className="order-container">
      <h2>Your Order</h2>
      {items.length === 0 ? (
        <div className="empty-state">
          <p>Your order is empty</p>
          <p>Add some delicious items from the menu!</p>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div className="order-item" key={item.id}>
              <div>
                <span className="item-name">{item.name}</span>
              </div>
              <div>
                <span className="item-price">${item.price}</span>
                <button onClick={() => onRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </>
      )}
      <div className="order-summary">
        <div className="total">
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <button className="checkout-btn" onClick={handleToggle}>
          {checkoutStatus ? "close" : "checkout"}
        </button>
        {items.length !== 0 && (
          <button className="clear-button" onClick={onClearItems}>
            clearItems
          </button>
        )}
      </div>
      {checkoutStatus && (
        <div className="checkout-page">
          <h2>Checkout</h2>
          <div className="checkout-content">
            <div className="checkout-section">
              <h3 className="section-title">Order Summary</h3>
              {items.map((item) => (
                <p>
                  {item.name} {item.price}
                </p>
              ))}
            </div>
            <div className="total">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>
          <div className="button-group">
            <button className="back-btn" onClick={onHandleCheckoutPage}>
              Back to Order
            </button>
            {total > 0 ? (
              <button
                className="confirm-btn"
                onClick={() => alert("Order Confirmed Succesfully")}
              >
                Confirm Order
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
}
