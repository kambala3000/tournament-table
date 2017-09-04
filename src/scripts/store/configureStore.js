import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    return store;
}
