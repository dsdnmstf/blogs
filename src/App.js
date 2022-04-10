import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./redux/reducers/allReducers";
import AppRouter from "./router/AppRouter";
const store = createStore(allReducers);

function App() {
  // const dispatch = useDispatch()
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
