import './style/Header.css';
import './style/Section.css';
import './style/App.css';
import Header from './components/Header';
import Section from './components/Section';
import Atc from './components/ATC';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(0);
  return (
    <div id='App'>
      <Header items={items} />
      <div id='content'>
        <Section />
        <Atc items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
