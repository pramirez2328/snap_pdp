function Atc({ items, setItems }) {
  return (
    <div className='atc'>
      <button onClick={() => setItems((items += 1))}>add to cart</button>
    </div>
  );
}

export default Atc;
