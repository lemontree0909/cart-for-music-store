const Instrument = ({instrument}) => {
    return(
        <div className="product-card">
            <img src={instrument.image} alt="pic"/>
            <h2>{instrument.name}</h2>
            <div className="order">
                <p>${instrument.price}</p>
        {/* TO FIX LATER - будет отдельный компонент кнопки */}
                <button>HOW MANY PİECES</button>
            </div>
            
            <button className="btn">Add to cart</button>
        </div>
    )
}

export default Instrument;