import { useSelector } from 'react-redux';
import icon from './icon.png';
import { getCartItems } from '../../redux/cartSlice';
import CartItem from './CartItem';
import cartItem from './CartItem';


const Cart = () => {
    const cartItems = useSelector(getCartItems);

    return(
        <div>
            <img className='cartIcon' src={icon} alt="icon"/>
            {cartItems.map(cartItem => <CartItem key={id} cartItem={cartItem}/>)}
        </div>
    )
}

export default Cart;