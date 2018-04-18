import Types from './constants';

export function getExchange(){
    return {
        type: Types.GET_EXCHANGE
    }
} 

export function setEurValue(usdValue, exValue){
    return {
        type: Types.SET_EUR_VALUE,
        usdValue,
        exValue
    }
}

export function setExValue(exValue){
    return {
        type: Types.SET_EX_VALUE,
        exValue
    }
}