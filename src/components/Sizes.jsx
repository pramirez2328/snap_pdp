import '../style/Sizes.css';
function Sizes({ sizes, setSize }) {
  return (
    <div className='sizes'>
      <div>
        <h5>Sizes (US)</h5>
      </div>

      <ul className='listOfSizes'>
        {sizes.map((size) => (
          <li
            className={`size ${size.liClass}`}
            key={size.key}
            onClick={() => setSize(size.value)}
          >
            {size.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sizes;
