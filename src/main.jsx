import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

import "./assets/css/index.css";

// Routelist
import { RouteList } from "./routes/RouteList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <RouteList />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
