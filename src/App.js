import React, { useState } from 'react';
import { add } from './func'; 

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowMenu(true);
  };

  const handleClick = () => {
    setShowMenu(false);
  };

  // Utilisez toujours votre fonction add ici
  const result = add(2, 3);

  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick}>
      <h1>Result: {result}</h1>
      <h2>Right-click to see the menu</h2>
      {showMenu && (
        <ul style={{ position: 'absolute', top: '50%', left: '50%', backgroundColor: 'lightgray', padding: '10px' }}>
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      )}
    </div>
  );
}

export default App;