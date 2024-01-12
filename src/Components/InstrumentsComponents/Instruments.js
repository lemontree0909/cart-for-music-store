import dataInstruments from "../../data/dataInstruments";
import Instrument from "./Instrument";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/instrumentsSlice";

const Instruments = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="products">
            {dataInstruments
            .filter(instrument => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === instrument.category;
            })
            .map(instrument => <Instrument key={instrument} instrument={instrument}/>)}
        </div>
    )
}

export default Instruments;