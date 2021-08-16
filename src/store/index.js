import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./reducers";
import rootSagas from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducers, compose(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSagas);

export default store;
