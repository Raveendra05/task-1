import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./allRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
