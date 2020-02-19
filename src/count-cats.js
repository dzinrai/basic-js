module.exports = function countCats(backyard) {
  let count = 0;
  for (let x = 0; x < backyard.length; x++) {
    for (let i = 0; i < backyard[x].length; i++) {
      if( backyard[x][i] === '^^' ) {
        count += 1;
      } 
    }    
  }
  return count;
};
