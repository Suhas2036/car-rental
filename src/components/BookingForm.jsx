import { useDispatch, useSelector } from "react-redux";
import { confirmBooking, closeBooking } from "../store/carsSlice";
import { useState } from "react";

function BookingForm() {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.cars.selectedCar);
  const [days, setDays] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  if (!car) return null;

  const total = days * car.pricePerDay;

  const handleConfirm = () => {
    dispatch(
      confirmBooking({
        carName: car.name,
        days,
        total,
      })
    );
    setConfirmed(true);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {!confirmed ? (
          <>
            <h2>{car.name}</h2>
            <p>₹{car.pricePerDay} per day</p>

            <label>Rental Days</label>
            <input
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />

            <p className="total">Total: ₹{total}</p>

            <button className="primary-btn" onClick={handleConfirm}>
              Confirm Booking
            </button>
            <button className="secondary-btn" onClick={() => dispatch(closeBooking())}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h2>✅ Booking Confirmed</h2>
            <p><strong>{car.name}</strong></p>
            <p>{days} day(s)</p>
            <p className="total">₹{total}</p>

            <button
              className="primary-btn"
              onClick={() => {
                setConfirmed(false);
                dispatch(closeBooking());
              }}
            >
              Done
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BookingForm;

