import './style/Header.css';
import './style/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState(0);
  const [currentSize, setCurrentSize] = useState({});
  const [sizes, setSizes] = useState([
    { key: 0, value: 'XS', liClass: 'inactive' },
    { key: 1, value: 'S', liClass: 'inactive' },
    { key: 2, value: 'M', liClass: 'inactive' },
    { key: 3, value: 'L', liClass: 'inactive' },
    { key: 4, value: 'XL', liClass: 'inactive' },
  ]);

  useEffect(() => {
    const sizeToCart = sizes.find((size) => size.liClass === 'active');
    setCurrentSize(sizeToCart);
  }, [sizes]);

  const handlePopUp = () => {
    const popUp = document.querySelector('.atc-pop-up');

    popUp.style.display = 'flex';
    popUp.style.justifyContent = 'center';
    popUp.style.alignItems = 'center';
    setTimeout(() => {
      popUp.style.display = 'none';
    }, 2000);
  };

  const handleAddSize = (current) => {
    setSizes(() => {
      return sizes.map((size) => {
        if (size.value === current) {
          return { ...size, liClass: 'active' };
        } else {
          return { ...size, liClass: 'inactive' };
        }
      });
    });
  };

  const handleAddToCart = () => {
    const activeSize = sizes.filter((size) => size.liClass === 'active');
    console.log(activeSize);
    let sizeEnable = activeSize.length > 0 ? true : false;
    if (sizeEnable) {
      setItems(items + 1);
      handlePopUp();
    } else {
      const popUp = document.querySelector('.atc-pop-up');

      popUp.style.display = 'flex';
      popUp.style.justifyContent = 'center';
      popUp.style.alignItems = 'center';
      popUp.style.fontSize = '2rem';
      popUp.style.color = 'red';
      popUp.innerHTML = 'chose a size';
      setTimeout(() => {
        popUp.style.display = 'none';
      }, 1000);
    }
  };

  return (
    <div id='App'>
      <Header items={items} currentSize={currentSize} />
      <Main
        sizes={sizes}
        handleAddSize={handleAddSize}
        setItems={handleAddToCart}
      />
      <Footer />
    </div>
  );
}

export default App;
