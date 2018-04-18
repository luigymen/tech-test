import Types from '../actions/constants';
import { createReducer } from '../helpers/stateHelper';
import currency from "../helpers/currency";

export const set = function (initialState) {
    return createReducer(initialState, {
        [Types.SET_EUR_VALUE](state, action) {
            let eurValue = '';
            if(action.exValue){
                eurValue = currency.formatToEuro(currency.usdToEuro(action.exValue, action.usdValue));
            }
            return Object.assign({}, state, { eurValue: eurValue });
        },
        [Types.SET_EX_VALUE](state, action) {
            return Object.assign({}, state, { exValue: action.exValue });
        }
    });
}