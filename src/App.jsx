import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CarList from "./components/CarList";
import Filter from "./components/Filter";
import BookingForm from "./components/BookingForm";
import BookingSummary from "./components/BookingSummary";

function App() {
  const theme = useSelector((state) => state.cars.theme);
  const { cars, search, category } = useSelector((state) => state.cars);

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.brand.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || car.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <Filter />

      <CarList cars={filteredCars} />

      <BookingForm />

      <BookingSummary />
    </div>
  );
}

export default App;





