import './style/Header.css';
import './style/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(0);
  const [size, setSize] = useState(false);

  const handleAddSize = () => {
    setSize(!size);
    if (size) {

    }
  };

  const handleAddToCart = () => {
    setItems(items + 1);
  };
  return (
    <div id='App'>
      <Header items={items} />
      <Main setSize={handleAddSize} setItems={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
