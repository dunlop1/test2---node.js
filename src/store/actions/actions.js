import { ACTION_ADD_DATA, ACTION_GET_DATA } from './types';



export function addNewData() {
    return function(dispatch) {
      fetch('./item.JSON')
        .then(res => res.json())
        .then(items => dispatch({
          type: ACTION_ADD_DATA,
          payload: items 
        }));
        
  }
}

export function updateFormData(items) {
    return function(dispatch) {
        dispatch({
            type: ACTION_GET_DATA,
            payload: { items }
        })
    }
}