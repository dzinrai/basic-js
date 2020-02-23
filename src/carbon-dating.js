const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  // t = 0.693 / k
  // A = k * N
  // ln (N/N0)= - k*t
  // A0 = MODERN_ACTIVITY
  // A0/A = N0/N
  // t(1/2) = 0.693 / k = HALF_LIFE_PERIOD
  // k = 0.693/HALF_LIFE_PERIOD
  let num = parseFloat(str);
  if(typeof str !== "string" || !num || !str || num <=0 || num >15){
      return false;
  }
  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/num)/k;
  return Math.floor(t)+1; // Age must be rounded up but ....
};
