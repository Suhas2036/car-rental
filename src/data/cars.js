import corolla from "../assets/car-images/corolla.jpg";
import city from "../assets/car-images/city.jpg";
import thar from "../assets/car-images/thar.jpg";
import creta from "../assets/car-images/creta.jpg";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    category: "Sedan",
    pricePerDay: 2500,
    image: corolla,
  },
  {
    id: 2,
    name: "Honda City",
    brand: "Honda",
    category: "Sedan",
    pricePerDay: 2700,
    image: city,
  },
  {
    id: 3,
    name: "Mahindra Thar",
    brand: "Mahindra",
    category: "SUV",
    pricePerDay: 4500,
    image: thar,
  },
  {
    id: 4,
    name: "Hyundai Creta",
    brand: "Hyundai",
    category: "SUV",
    pricePerDay: 3800,
    image: creta,
  },
];

export default cars;

