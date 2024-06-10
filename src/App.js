// import { Provider } from "react-redux";
// import Body from "../components/Body";
// import appStore from "./utils/appStore";

// function App() {
//   return (
//     <Provider store={appStore}>
//       <Body />
//     </Provider>
//   );
// }

// export default App;
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;

