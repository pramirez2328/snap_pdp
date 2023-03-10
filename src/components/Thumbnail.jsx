import tshirt1 from '../assets/tshirt1.jpg';
import tshirt2 from '../assets/tshirt2.jpg';

function Thumbnail() {
  return (
    <>
      <img className='thumbnail' src={tshirt1} alt='tshirt' />
      <img className='thumbnail' src={tshirt2} alt='tshirt' />
    </>
  );
}

export default Thumbnail;
