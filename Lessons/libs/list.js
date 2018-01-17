/* eslint-disable indent,no-tabs */
var list = function(){
	var array = []
	var Array = {
		length: 0,
		push: function(item){
      this[this.length] = item
			this.length += 1
      return this.length
		},
		pop: function(){
		  var lastItemIndex = this.length -1
      var lastItem = this[lastItemIndex]
      delete this[lastItemIndex]
		  this.length -= 1
      return lastItem    
		}
	}
	return Array
}