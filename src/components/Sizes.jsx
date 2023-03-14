import '../style/Sizes.css';
function Sizes({ setSize }) {
  return (
    <div className='sizes'>
      <div>
        <h5>Sizes (US)</h5>
      </div>

      <ul className='listOfSizes'>
        <li className='size' onClick={() => setSize()}>
          XS
        </li>
        <li className='size' onClick={() => setSize()}>
          S
        </li>
        <li className='size' onClick={() => setSize()}>
          M
        </li>
        <li className='size' onClick={() => setSize()}>
          L
        </li>
        <li className='size' onClick={() => setSize()}>
          XL
        </li>
      </ul>
    </div>
  );
}

export default Sizes;
