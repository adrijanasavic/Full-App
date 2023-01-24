import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setChampion } from "./store/sliceChampion";
import getData from "./utils/getData";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getData().then((data) => dispatch(setChampion(data)));
  }, []);
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
}

export default App;
