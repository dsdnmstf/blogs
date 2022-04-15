import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { combinedStore } from "./redux";
import AppRouter from "./router/AppRouter";
function App() {
  const store = combinedStore();
  console.log(store);
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  );
}

export default App;
