import CarItem from "./CarItem";

function CarList({ cars }) {
  return (
    <div className="car-grid">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
