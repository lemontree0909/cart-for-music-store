import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart, getCartItems, updateQuantity } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Instrument = ({instrument}) => {
    const { name, price, image } = instrument;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const items = useSelector(getCartItems);

    
    const itemsInCart = items.some(item => item.instrumentId === instrument.id);

    const addToCart = () => {
        if (!itemsInCart) {
            dispatch(addItemToCart({instrument, quantity}));
            setQuantity(1)
        } else {
            dispatch(updateQuantity({instrument, quantity}))
            setQuantity(1)
        }
    }

    return(
        <div className="product-card">
            <img src={image} alt="pic"/>
            <h2>{name}</h2>
            <div className="order">
                <p>${price}</p>
        {/* отдельный компонент кнопки */}
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            </div>
            
            <button className="btn" onClick={addToCart}>
                Add to Cart
            </button>
        </div>
    )
}

export default Instrument;