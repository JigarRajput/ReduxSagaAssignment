import { useSelector, useDispatch } from "react-redux";
import { filterByCategory } from "../../../redux";

const useCategory = () => {
    const categorySelected = useSelector(state => state.products.category);
    const dispatch = useDispatch();
  
    const setCategory = category => {
      dispatch(filterByCategory(category.name.toUpperCase()));
    };
    return {
        categorySelected,
        setCategory
}  
}

export default useCategory