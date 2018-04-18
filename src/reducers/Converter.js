import Types from '../actions/constants';
import { createReducer } from '../helpers/stateHelper';

export const set = function (initialState) {
    return createReducer(initialState, {
        [Types.SET_EUR_VALUE](state, action) {
            return Object.assign({}, state, { eurValue: action.eurValue });
        },
        [Types.SET_LOADING](state, action) {
            return Object.assign({}, state, { loading: action.loading });
        }
    });
}