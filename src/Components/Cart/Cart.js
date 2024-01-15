import { useSelector } from 'react-redux';
import icon from './icon.png';
import { getCartItems, getTotalPrice, getTotalQuantity } from '../../redux/cartSlice';
import CartItem from './CartItem';
import { useState } from 'react';
// import {
//     Link
//   } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const quantity = useSelector(getTotalQuantity);
    const [isActive, setIsActive] = useState(false);


const checkCartnotEmpty = () => {
    if (quantity === 0) {
        return (
            <div className={isActive ? 'cart-items' : 'cart-items hide'}>
                <h5>YOUR CART IS EMPTY</h5>


        {/* TO FIX LATER - будет такая же ссылка как и в роутере */}

                {/* <Link to='/shop' className="">
                    <h2 className="">START SHOPPING</h2>
                </Link> */}
        
            </div>
            
        ) 
    } else {
    return (
        <div className={isActive ? 'cart-items' : 'cart-items hide'}>
            {cartItems.map((cartItem, id) => <CartItem cartItem={cartItem} key={id}/>)}
        </div>
    )
}
}

const onCartHide = (event) => {
// 👇️ toggle isActive state on click
    setIsActive(current => !current);
} 

return(
    <div className='cart-btn'>

        <div className="cart-container">
            <button onClick={onCartHide} className='cart-button'>
                <img className='cartIcon' src={icon} alt="icon"/>
            </button>
            <p className='item-count'>{quantity}</p>
        </div>
        
        <h3 className='item-total'>TOTAL: ${totalPrice.toFixed(0)}</h3>

        <div className='cart-dropdown-container'>
            {checkCartnotEmpty()}
        </div>
    </div>
)

}

export default Cart;