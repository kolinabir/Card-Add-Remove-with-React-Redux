import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </Provider>
    </div>
  );
};

export default App;
