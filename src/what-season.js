module.exports = function getSeason(dat) {
  if(!dat){
    return 'Unable to determine the time of year!';
  }else if( dat.getDate() && dat.toDateString() ){
    // toDateString not implemented in fake date
    let season = {"winter": [11,0,1], "spring":[2,3,4], "summer":[5,6,7],"autumn":[8,9,10]}
    for( let [key,value] of Object.entries(season) ){
      if(value.includes(dat.getMonth())) {
        season = key;
        break;
      }
    }
    if(typeof(season) === "string"){
      return season;
    } else throw Error();
  }else{
    throw Error();
  }
};
