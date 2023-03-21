import logo from '../assets/snapLogo.jpg';
import cartLogo from '../assets/cart.png';
import AddToCartPopUp from './AddToCartPopUp';

function Header({ items, currentSize, atcStatus }) {
  return (
    <header id='header'>
      <div id='leftInfo'>
        <div id='snapLogo'>
          <img id='imgLogo' src={logo} alt='snap logo'></img>
          <h1 id='snap'>Snap</h1>
        </div>
        <div className='categories'>
          <h3 className='women'>Women</h3>
          <h3 className='men'>Men</h3>
          <h3 className='kids'>Kids</h3>
        </div>
      </div>
      <div id='rightInfo'>
        <AddToCartPopUp size={currentSize} atcStatus={atcStatus} />
        <p id='itemsInCart'>{items}</p>
        <img id='cart' src={cartLogo} alt='cart' />
      </div>
    </header>
  );
}
export default Header;
