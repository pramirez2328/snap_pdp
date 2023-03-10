import './style/Header.css';
import './style/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(0);
  return (
    <div id='App'>
      <Header items={items} />
      <Main items={items} setItems={setItems} />
      <Footer />
    </div>
  );
}

export default App;
