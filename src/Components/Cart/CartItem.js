import dataInstruments from "../../data/dataInstruments";

const CartItem = ({cartItem}) => {
    console.log(cartItem)

    const instruments = dataInstruments.find(item => item.id === cartItem.instrumentId);

    return(
        <div>
            <p>{instruments.name}</p>
            <p>{cartItem.quantity} pcs</p>
        </div>
    )
}


export default CartItem;