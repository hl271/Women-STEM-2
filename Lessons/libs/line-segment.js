'use strict'
function createLineSegment(length, type){
  return {
    length : length,
    type : type = '*',
    print : function(){
      let line ='';
      for(let i=1; i<=this.length; i++){
        line += this.type;
      }
      return line
    }
  }
}
