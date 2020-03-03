module.exports = function repeater( str_param, options) {
    // options = { repeatTimes(int) separator(str) addition(str) additionRepeatTimes(int)  additionSeparator(str) }
    str_param = String(str_param);
    if(options.separator === undefined)  options.separator = "+"; // separator by dafault
    if(options.repeatTimes === undefined ) options.repeatTimes = 0; // repeatTimes by dafault
    if(options.additionRepeatTimes === undefined ) options.addition ? options.additionRepeatTimes = 1 : options.additionRepeatTimes = 0; // additionRepeatTimes by dafault = 0 or 1
    options.addition = String(options.addition);
    for (let j = 0; j <= options.additionRepeatTimes-1; j++) {
        if( j !== options.additionRepeatTimes-1 ){
            str_param = str_param.concat(options.addition).concat(options.additionSeparator);
        }else{
            str_param = str_param.concat(options.addition);
        }
    }
    let new_str = ""+str_param;
    for (let i = 0; i < options.repeatTimes-1; i++) { 
        i !== options.repeatTimes-1 ? new_str += options.separator + str_param : "";
    }
    return new_str;
  };
  