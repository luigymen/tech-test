function usdToEuro (exValue, usdValue){
   return parseFloat(usdValue) * exValue;
}

function formatToEuro (value){
    return `€ ${value.toLocaleString('en-US', "EUR")}`;
}

function formatToUSD (value){
    return `$ ${value.toLocaleString('en-US', "USD")}`;
}

function toNormalString (value){
    return value.replace('$ ', '').replace(',', '');
}

export default {
    usdToEuro,
    formatToEuro,
    formatToUSD,
    toNormalString
}