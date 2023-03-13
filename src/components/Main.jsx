import Thumbnail from './Thumbnail';
import Description from './Description';
import Sizes from './Sizes';
import Atc from './AddToCart';
import FitFinderAndSizeChart from './FitFinderAndSizeChart';
import '../style/Main.css';

function Main({ items, setItems }) {
  return (
    <main id='main'>
      <div id='section-left'>
        <Thumbnail />
      </div>
      <div id='section-right'>
        <Description />
        <FitFinderAndSizeChart />
        <Sizes />
        <Atc items={items} setItems={setItems} />
      </div>
    </main>
  );
}

export default Main;
