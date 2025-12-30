import { useSelector, useDispatch } from "react-redux";
import { clearBookings } from "../store/carsSlice";

function BookingSummary() {
  const bookings = useSelector((state) => state.cars.bookings);
  const dispatch = useDispatch();

  if (bookings.length === 0) return null;

  return (
    <div className="booking-summary">
      <div className="booking-header">
        <h2>Your Bookings</h2>
        <button
          className="clear-bookings"
          onClick={() => dispatch(clearBookings())}
        >
          Clear All
        </button>
      </div>

      <div className="booking-list">
        {bookings.map((booking, index) => (
          <div key={index} className="booking-item">
            <div>
              <strong>{booking.carName}</strong>
              <p>{booking.days} day(s)</p>
            </div>
            <span className="price">₹{booking.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingSummary;

