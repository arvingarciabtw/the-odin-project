import { Outlet } from 'react-router';
import { useState, createContext } from 'react';

const AppContext = createContext();

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartIconArray, setCartIconArray] = useState([]);

  return (
    <AppContext.Provider
      value={{ cartQuantity, setCartQuantity, cartIconArray, setCartIconArray }}
    >
      <Outlet />
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };
