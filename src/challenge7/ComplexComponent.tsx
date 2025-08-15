import React, { useState } from 'react';

const UserProfileComponent: React.FC = () => {

  const [userName, setUserName] = useState('John Doe');
  const [userAge, setUserAge] = useState(25);
  const [userEmail, setUserEmail] = useState('john@example.com');
  const [userBio, setUserBio] = useState('Software developer');

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
      <h2>User Profile</h2>
      <div>
        <label>Name: </label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          value={userAge}
          onChange={(e) => setUserAge(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Bio: </label>
        <textarea
          value={userBio}
          onChange={(e) => setUserBio(e.target.value)}
        />
      </div>
      <p>Profile: {userName}, {userAge} years old, {userEmail}</p>
    </div>
  )
};


const ShoppingCartComponent: React.FC = () => {

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', price: 999, quantity: 1 },
    { id: 2, name: 'Mouse', price: 29, quantity: 2 }
  ]);
  const [shippingCost, setShippingCost] = useState(15);
  const [taxRate, setTaxRate] = useState(0.08);

  const cartSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartTax = cartSubtotal * taxRate;
  const cartTotal = cartSubtotal + cartTax + shippingCost;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <span>{item.name} - ${item.price} x {item.quantity}</span>
          <button
            onClick={() =>
              setCartItems(items =>
                items.map(i =>
                  i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                )
              )
            }
          >
            +
          </button>
        </div>
      ))}
      <div>Shipping: ${shippingCost}</div>
      <div>Tax Rate: {(taxRate * 100).toFixed(1)}%</div>
      <div>Subtotal: ${cartSubtotal.toFixed(2)}</div>
      <div>Tax: ${cartTax.toFixed(2)}</div>
      <div><strong>Total: ${cartTotal.toFixed(2)}</strong></div>
    </div>
  )
};

const SettingsComponent: React.FC = () => {


  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
      <h2>Settings</h2>
      <div>
        <label>
          <input
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={(e) => setTheme(e.target.value)}
          />
          Light Theme
        </label>
        <label>
          <input
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={(e) => setTheme(e.target.value)}
          />
          Dark Theme
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={autoSave}
            onChange={(e) => setAutoSave(e.target.checked)}
          />
          Auto Save
        </label>
      </div>
      <div>
        <label>Language: </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
    </div>
  )
};

const DashboardComponent: React.FC = () => {

  return (
    <div style={{ padding: '20px', maxWidth: '1200px' }}>
      <h1>Dashboard</h1>
      <UserProfileComponent />
      <ShoppingCartComponent />
      <SettingsComponent />
    </div>
  );
};

export default DashboardComponent;

