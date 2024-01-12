import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Instrument = ({instrument}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div className="product-card">
            <img src={instrument.image} alt="pic"/>
            <h2>{instrument.name}</h2>
            <div className="order">
                <p>${instrument.price}</p>
        {/* TO FIX LATER - будет отдельный компонент кнопки */}
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                    
            </div>
            
            <button className="btn" onClick={() => {dispatch(addItemToCart({instrument, quantity}))}}>
                Add to Cart
            </button>
        </div>
    )
}

export default Instrument;