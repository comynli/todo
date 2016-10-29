/**
 * Created by comyn on 16-10-30.
 */

export const ADD_TYPE = 'ADD_TYPE';

export function add(content) {
    return {
        type: ADD_TYPE,
        content
    }
}

export const DONE_TYPE = 'DONE_TYPE';
export function done(id) {
    return {
        type: DONE_TYPE,
        id
    }
}


export const REOPEN_TYPE = 'REOPEN_TYPE';
export function reopen(id) {
    return {
        type: REOPEN_TYPE,
        id
    }
}

export const FILTER_TYPE = 'FILTER_TYPE';
export function filter(fl) {
    return {
        type: FILTER_TYPE,
        fl
    }
}