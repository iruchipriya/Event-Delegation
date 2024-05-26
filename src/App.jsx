import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleClick = (event) => {
    // if (event.target.tagName === 'LI') {
    console.log(`${event.target.textContent} ${event.target.id} clicked`);
    window.open(`https://example.com/${event.target.id}`, '_blank');
    // }
  };

  // const addItem = () => {
  //   setItems([...items, `Item ${items.length + 1}`]);
  // };

  return (
    <div>
      {/* <button onClick={addItem}>Add Item</button> */}
      <ul className="item-list" onClick={handleClick}>
        {items.map((item, index) => (
          <li key={index} id={item} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
