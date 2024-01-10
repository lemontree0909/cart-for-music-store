import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/instrumentsSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div className="cta">
            <p onClick={() => {dispatch(filterCategory(category))}} 
            className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
                {category}
            </p>
        </div>
    )
}

export default Filter;