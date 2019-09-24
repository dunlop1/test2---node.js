import {ACTION_GET_DATA, ACTION_ADD_DATA} from '../actions/types';

export const initialState = {
    items:[],
    item:{}
    
}

export default function addNewData(state = initialState, action) {
    switch(action.type){
        case ACTION_GET_DATA:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}