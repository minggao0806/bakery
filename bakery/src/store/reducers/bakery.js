import { handleActions } from 'redux-actions'
import { GET_BAKERY_LIST } from '../types'
export default handleActions(
    {
        [GET_BAKERY_LIST](state,{payload}){
            return {
                ...state,
                bakeryData:payload
            }
        }
    },
    {
        bakeryData:{}
    }
)