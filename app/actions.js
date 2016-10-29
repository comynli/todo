/**
 * Created by comyn on 16-10-30.
 */

export const ADD_TYPE = 'ADD_TYPE';
export function add(content) {
    // return dispatch => dispatch({
    //     type: ADD_TYPE,
    //     content 
    // });
    return dispatch => {
        fetch('/api/todo', {method: 'POST', body: JSON.stringify({content})})
            .then(res => res.json())
            .then(json => dispatch({type: ADD_TYPE, id: json.id}))
        
    }
}

export const DONE_TYPE = 'DONE_TYPE';
export function done(id) {
    // return dispatch => dispatch({
    //     type: DONE_TYPE,
    //     id
    // });
    return dispatch => {
        fetch(`/api/todo/${id}/done`, {method: 'PUT'})
            .then(res => res.json())
            .then(json => dispatch({type: DONE_TYPE, id: json.id}))
    }
}


export const REOPEN_TYPE = 'REOPEN_TYPE';
export function reopen(id) {
    // return dispatch => dispatch({
    //     type: REOPEN_TYPE,
    //     id
    // });

    return dispatch => {
        fetch(`/api/todo/${id}/reopen`, {method: 'PUT'})
            .then(res => res.json())
            .then(json => dispatch({type: DONE_TYPE, id: json.id}))
    }
}

export const FILTER_TYPE = 'FILTER_TYPE';
export function filter(fl) {
    return dispatch => dispatch({
        type: FILTER_TYPE,
        fl
    });
}


export const LIST_TYPE = 'LIST_TYPE';
export function list(fl) {
    return dispatch => {
        fetch(`/api/todo/${fl}`)
            .then(res => res.json())
            .then(json => dispatch({
                type: LIST_TYPE,
                todos: json.todos
            }))
    }
}