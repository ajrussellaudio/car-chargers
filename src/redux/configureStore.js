import { createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ajax } from "rxjs/ajax";
import reducer from "./reducers";
import epic from "./epics";

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    getJSON: ajax.getJSON
  }
});

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(epic);
  return store;
}
