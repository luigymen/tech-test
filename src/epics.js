import 'rxjs';
import API from './helpers/api';
import Types from './actions/constants';
import * as ConverterActions from './actions/Converter';

const getExchange = action$ =>
    action$.ofType(Types.GET_EXCHANGE)
        .mergeMap((action) => {
            console.log("API CALL"); // 10 minutes notitication
            return API.get(`latest?base=USD&symbols=EUR`, { json: true })
                .flatMap((result) => {
                    return [
                        ConverterActions.setExValue(result.data.rates.EUR),
                    ];
                })
                .catch(error => {
                    alert("Error!")
                    return [
                        ConverterActions.setExValue(null),
                    ];
                });
        });

export default {
    getExchange
}