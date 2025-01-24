import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store/store";
// import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

// Routelist
import { RouteList } from "./routes/RouteList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate persistor={persistor}> */}
    <RouteList />
    {/* </PersistGate>
    </Provider> */}
  </StrictMode>
);
