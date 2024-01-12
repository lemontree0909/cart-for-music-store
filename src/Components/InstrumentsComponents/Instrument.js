import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Instrument = ({instrument}) => {
    const [quantity, setQuantity] = useState(1);
    return(
        <div className="product-card">
            <img src={instrument.image} alt="pic"/>
            <h2>{instrument.name}</h2>
            <div className="order">
                <p>${instrument.price}</p>
        {/* TO FIX LATER - будет отдельный компонент кнопки */}
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

            </div>
            
            <button className="btn">Add to cart</button>
        </div>
    )
}

export default Instrument;