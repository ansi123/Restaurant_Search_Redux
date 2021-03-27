import {
    
    FETCH_USERS_SUCCESS,
  } from '../action/action'
  
  const initialState = {
    users: [],
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      
      default: return state
    }
  }
  
  export default reducer
  