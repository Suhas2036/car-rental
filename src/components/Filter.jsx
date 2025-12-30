import { useDispatch } from "react-redux";
import { setSearch, setCategory } from "../store/carsSlice";

function Filter() {
  const dispatch = useDispatch();

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by brand or name..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <select onChange={(e) => dispatch(setCategory(e.target.value))}>
        <option value="All">All</option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
      </select>
    </div>
  );
}

export default Filter;
