import { useDispatch } from "react-redux";
import { selectCar } from "../store/carsSlice";

function CarItem({ car }) {
  const dispatch = useDispatch();

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />

      <div className="car-info">
        <h3>{car.name}</h3>
        <p className="car-meta">
          {car.brand} • {car.category}
        </p>
        <p className="car-price">₹{car.pricePerDay} / day</p>

        <button
          className="primary-btn"
          onClick={() => dispatch(selectCar(car))}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default CarItem;


