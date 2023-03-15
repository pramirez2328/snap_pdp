import '../style/AddToCartPopUp.css';
import tshirt from '../assets/tshirt1.jpg';

function AddToCartPopUp({ size }) {
  return (
    <div className='atc-pop-up'>
      <img src={tshirt} alt='purchased item'  width={100}/>
      <h2>
        You just added size {!size?.value ? '' : size.value} to your cart!
      </h2>
    </div>
  );
}

export default AddToCartPopUp;
