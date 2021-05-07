import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';

//大的reducer分成小的reducer
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
});

export default reducer;