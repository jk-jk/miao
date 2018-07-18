var jk_jk = {
  chunk: function(array, size) {
    let res = []
    for(let i = 0;i < array.length; i+=size){
      res.push( array.slice(i , i + size))
    }
    return res
  },

  compact: function(array){
    let ary = array
    let Ary = []
    for(let i = 0;i < ary.length;i++){
      if(ary[i]){
        Ary.push(ary[i])
      }
    }
    return Ary
  },

  concat: function(array,...values){
    var res=[]
    for (let value of array){
      res.push(value)
    }
    for (let value of values){
      if(Array.isArray(value)){
        res.push(...value)
      } else {
        res.push(value)
      }
    }
    return res
  }
}
