import { combineReducers, createStore } from "redux";
import theme from "./Reducers/theme";
import fontSize from "./Reducers/fontSize";
import languages from "./Reducers/languages";
import currentLanguage from "./Reducers/currentLanguage";
import code from './Reducers/code'
const rootReducer = combineReducers({
    theme: theme,
    fontSize: fontSize,
    languages: languages,
    currentLanguage: currentLanguage,
    code:code
});

const store = createStore(rootReducer);

export default store;