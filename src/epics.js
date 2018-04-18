import 'rxjs';
import API from './helpers/api';
import Types from './actions/constants';
import * as ConverterActions from './actions/Converter';
import currency from "./helpers/currency";

const convert = action$ =>
    action$.ofType(Types.CONVERT)
        .mergeMap((action) => {
            return API.get(`latest?base=USD&symbols=EUR`, { json: true })
                .flatMap((result) => {
                    const exValue = result.data.rates.EUR;
                    const eurValue = currency.formatToEuro(currency.usdToEuro(exValue, action.usdValue));
                    return [
                        ConverterActions.setEurValue(eurValue),
                        ConverterActions.setLoading(false)
                    ];
                })
                .catch(error => {
                    alert("Error!")
                    return [
                        ConverterActions.setEurValue(''),
                        ConverterActions.setLoading(false)
                    ];
                });
        });

export default {
    convert
}