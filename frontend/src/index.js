import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";

import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
//...

const store = configureStore();
let persistor = persistStore(store);

if (process.env.NODE_ENV !== "production") {
    restoreCSRF();

    window.csrfFetch = csrfFetch;
    window.store = store;
    window.sessionActions = sessionActions;
}

function Root() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ModalProvider>
                    <BrowserRouter>
                        <App className="app" />
                    </BrowserRouter>
                </ModalProvider>
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById("root")
);
