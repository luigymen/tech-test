import Types from './constants';

export function convert(usdValue){
    return {
        type: Types.CONVERT,
        usdValue
    }
} 

export function setEurValue(eurValue){
    return {
        type: Types.SET_EUR_VALUE,
        eurValue
    }
}

export function setLoading(loading){
    return {
        type: Types.SET_LOADING,
        loading
    }
}