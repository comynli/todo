/**
 * Created by comyn on 16-10-30.
 */
import combineReducers from 'redux/lib/combineReducers';
import * as Actions from './actions';

const initialState = {
    nextId: 0,
    todos: [],
    filter: 'todo',
    needFetch: false
};


function todoApp(state = initialState, action) {
    switch (action.type) {
        case Actions.FILTER_TYPE:
            return Object.assign({}, state, {filter: action.fl, needFetch: true});
        case Actions.LIST_TYPE:
            return Object.assign({}, state, {todos: action.todos, needFetch: false});
        case Actions.ADD_TYPE:
        case Actions.DONE_TYPE:
        case Actions.REOPEN_TYPE:
            return Object.assign({}, state, {needFetch: true});
        default:
            return state;
    }
}


const rootReducer = combineReducers({
   todoApp
});

export default rootReducer;