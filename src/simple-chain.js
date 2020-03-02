const chainMaker = {
  chain: [],
  chain_length: 0,
  getLength() {
    return this.chain_length;
  },
  addLink(value) {
    this.chain.push(value===undefined ? "( )" : value);
    this.chain_length += 1;
    return this;
  },
  removeLink(position) { 
    if( Number.isInteger(position) && position-1<this.chain.length && position-1>=0 ){
      this.chain.splice(position-1,1);
      return this;
    }else{ 
      this.deleteChain();
      throw Error();
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  deleteChain() {
    this.chain = [];       // chain must be deleted
    this.chain_length = 0; // chain must be deleted
  },
  finishChain() {
    const chain = [...this.chain]; // copy array before clear
    this.deleteChain();
    return chain.map( (val) => {  return "( " + val + " )~~";  } ).join("").slice(0, -2);
  }
};

module.exports = chainMaker;
