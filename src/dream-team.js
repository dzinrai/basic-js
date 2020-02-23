module.exports = function createDreamTeam(arr) {
  let coolName = [];
  if( Array.isArray(arr) ){
    coolName =  [...arr.filter( (x) => { return typeof(x) === "string"; } )];
  }else{
    return false;
  }
  coolName = coolName.map( (x) => { return x.trim().toUpperCase().match(/^[A-Z]/i); } );
  return coolName.sort().join('');
};