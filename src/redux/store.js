
import reducer from './reducer/reducerSlice'
import {createStore} from 'redux'
const store = createStore(reducer)
// console.log(reducer);
export default store;