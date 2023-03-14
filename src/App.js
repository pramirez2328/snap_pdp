import './style/Header.css';
import './style/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(0);
  const [sizes, setSizes] = useState([
    { key: 0, value: 'XS', liClass: 'inactive' },
    { key: 1, value: 'S', liClass: 'inactive' },
    { key: 2, value: 'M', liClass: 'inactive' },
    { key: 3, value: 'L', liClass: 'inactive' },
    { key: 4, value: 'XL', liClass: 'inactive' },
  ]);

  const handleAddSize = (currentSize) => {
    const newSizes = sizes.map((size) => {
      if (size.value === currentSize) {
        return { ...size, liClass: 'active' };
      } else {
        return { ...size, liClass: 'inactive' };
      }
    });
    setSizes(newSizes);
  };

  const handleAddToCart = () => {
    setItems(items + 1);
  };
  return (
    <div id='App'>
      <Header items={items} />
      <Main sizes={sizes} setSize={handleAddSize} setItems={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
