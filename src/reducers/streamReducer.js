import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';


export default (state = {}, action) =>{
    switch(action.type) {
        //mapKeys takes an array and returns and object
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload,'id')};
        case FETCH_STREAM:
            return {...state, [action.payload.id] : action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id] : action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id] : action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);  //omit will create a new object after deleting the id present in payload
        default :
            return state;
    }
}