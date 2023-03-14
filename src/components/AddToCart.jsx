import '../style/AddToCart.css';
function Atc({ setItems }) {
  return (
    <div className='atc'>
      <button onClick={() => setItems()}>Add To Bag</button>
    </div>
  );
}

export default Atc;
