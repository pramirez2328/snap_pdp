import Thumbnail from './Thumbnail';
import Description from './Description';
import Sizes from './Sizes';
import Atc from './AddToCart';
import '../style/Main.css';

function Main({ items, setItems }) {
  return (
    <main id='main'>
      <div id='section-left'>
        <Thumbnail />
      </div>
      <div id='section-rigth'>
        <Description />
        <Sizes />
        <Atc items={items} setItems={setItems} />
      </div>
    </main>
  );
}

export default Main;
