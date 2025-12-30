import { createSlice } from "@reduxjs/toolkit";
import carsData from "../data/cars";


const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: carsData,
    search: "",
    category: "All",
    selectedCar: null,
    bookings: savedBookings,
    theme: "light",
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    selectCar(state, action) {
      state.selectedCar = action.payload;
    },
    confirmBooking(state, action) {
      state.bookings.push(action.payload);
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
      state.selectedCar = null;
    },
    closeBooking(state) {
      state.selectedCar = null;
    },
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    clearBookings(state) {
  state.bookings = [];
  localStorage.removeItem("bookings");
}

  },
});

export const {
  setSearch,
  setCategory,
  selectCar,
  confirmBooking,
  closeBooking,
  toggleTheme,
  clearBookings,
} = carsSlice.actions;

export default carsSlice.reducer;
