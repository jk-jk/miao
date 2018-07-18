var jk_jk = {
  chunk: function(array, size) {
    let res = []
    for(var i = 0;i < array.length; i+=size){
      res.push( array.slice(i , i + size))
    }
    return res
  }
}
