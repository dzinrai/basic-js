module.exports = class DepthCalculator {
    constructor(){
        this.max = this.max.bind(this);
    }
    calculateDepth(arr) {
        if( Array.isArray(arr) ){
            let z = this.max(arr.map( x => this.calculateDepth(x)));
            return 1 + (z? z : 0);
        }else if( !Array.isArray(arr) ){
            return 0;
        }
    }
    max(list){
        if( !Array.isArray(list) ) return list;
        list.sort( function(a,b) {return b-a;});
        return list[0];
      }
};