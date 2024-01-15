import { useDispatch } from "react-redux";
import dataInstruments from "../../data/dataInstruments";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    console.log(cartItem)

    const instruments = dataInstruments.find(item => item.id === cartItem.instrumentId);
    const dispatch = useDispatch();
    console.log(instruments);


    return(
        <div>
            <p>{instruments.name}</p>
            
            <div className="order">
                <p>{cartItem.quantity} x ${instruments.price}</p>
                <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <img className="icon" src="https://img.icons8.com/badges/48/trash.png" alt="trash"/>
                </span>
            </div>
        </div>
    )
}


export default CartItem;