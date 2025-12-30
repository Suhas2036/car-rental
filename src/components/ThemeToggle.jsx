import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/carsSlice";

function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.cars.theme);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
