import { createAction } from 'redux-actions';
import { GET_BAKERY_LIST } from '../types';
import  Until  from '../../untils/request.js'
export const getBakery = createAction(
    GET_BAKERY_LIST,
    (url) => Until.get(url)
)