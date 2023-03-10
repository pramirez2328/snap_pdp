function Atc({ items, setItems }) {
  return (
    <div className='atc'>
      <button onClick={() => setItems((items += 1))}>Add To Bag</button>
    </div>
  );
}

export default Atc;
