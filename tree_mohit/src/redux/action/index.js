import React, {useState} from 'react';


import {
  FETCH_USERS_SUCCESS
} from './actionTypes'


// export const fetchUsers = () => {
    
//   return (dispatch) => {
//     <div>
//         {res.map(data=>{
//             return(
//                 <div key={data.data[0].id}>
//                 <h4>{data.data[0].distance}</h4>
//                 </div>
//             )
//         })}
//         </div>
//   }
// }



export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}


