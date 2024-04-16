// import { createSlice } from '@reduxjs/toolkit'
import { FIELD_DATA , FILE_DATA} from '../actions/action'
const initialState = {
    file :null , 
    fieldata:{}
}
// console.log(reducer);
const reducer = (state = initialState , action) =>{
  // console.log(state);
  switch(action.type){
    case FILE_DATA:
      return{
        ...state , 
        file:action.payload ,
      };
      case FIELD_DATA:
        return{
          ...state , 
          fielddata:{
            ...state.fieldata , 
            ...action.payload
          },
          // fielddata:action.payload
        };
          default:
            return state;
  }
}
export default reducer