import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { combinedStore } from "./redux";
import AppRouter from "./router/AppRouter";
function App() {
  const store = combinedStore();

  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  );
}

export default App;
