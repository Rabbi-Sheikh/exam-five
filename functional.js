function toParseFloat(a){

    const getStringValue= document.getElementById(a);
    const getValue  = getStringValue.value;
    const toConvert = parseFloat(getValue);
    return toConvert;
}