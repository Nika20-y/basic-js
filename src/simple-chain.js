const CustomError = require("../extensions/custom-error");

const chainMaker = {
  x: [],
  addLink(value) {
    if(value===undefined){
      this.x.push('( )~~');
    }
    else{
      this.x.push('( '+value+' )~~');
    }
    return chainMaker

  },

  getLength() {
    return this.x.length
  },

  removeLink(position) {
    if(typeof position!== 'number'||position<1||position>chainMaker.getLength()){
      this.x = [];
      throw new Error('Error');

    }
    else {
      this.x.splice(position-1, 1)
      return chainMaker}
  },

  reverseChain() {
    this.x = this.x.reverse()
    return chainMaker
  },

  finishChain() {
    let result = this.x.join('');
    result= result.replace(/~{2}$/, '');
    this.x = []
    return result
  }
};

module.exports = chainMaker;
