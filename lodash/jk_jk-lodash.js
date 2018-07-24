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
  },

  difference: function(array, ...values){
    let res = []
    let ary = [].concat(...values)
    for (let a of array){
      if(!ary.includes(a)){
        res.push(a)
      }
    }
    return res
  },

  drop: function(array,n = 1){
    return array.slice(n)
  },

  dropRight: function(array, n = 1){
    if(n == 0){
      return array
    }
    return array.slice(0,-n)
  },

  flatten:  function(ary){
    var res = [].concat(...ary)
    return res

  },

  flattenDeep: function flattenDeep(ary) {
    var result = []
    for(var i = 0;i < ary.length;i++){
      if(Array.isArray(ary[i])){
        var temp = flattenDeep(ary[i])
        result = [...result, ...temp]
      } else{
        result.push(ary[i])
      }
    }
    return result
  },

  flattenDepth: function flattenDepth(ary, depth = 1) {
    if (depth === 0) {
      return ary.slice()//[...ary]
    }
    var result = []

    for(var i = 0;i<ary.length;i++) {
      if (Array.isArray(ary[i])) {
        var tmp = flattenDepth(ary[i], depth - 1)
        result = [...result, ...tmp]
      } else {
        result.push(ary[i])
      }
    }

    return result
  },

  identity: function (v){
    return v
  },

  fill: function(array, value, start = 0, end = array.length){
    var res = array
    for(var i = start;i < end;i++){
      res[i] = value
    }
    return res
  },

  fromPairs: function(array){
    var res = {}
    array.forEach(item => res[item[0]] = item[1])
    return res
  },

  head: array => {return array[0]},
  
  indexOf: function (array, value, fromIndex = 0){
    for(let i = fromIndex;i < array.length;i++){
      if( array[i] === value){
        return i
      } 
        
    }
    return -1
  },
  
  initial: function(array){
    array.pop()
    return array
  },

  intersection: function(arrays,...Array){
    let ary = [].concat(...Array)
    let res = []
    arrays.forEach(item => {
      if(ary.indexOf(item) !== -1){
        res.push(item)
      }
    })
    return res
  },

  join: function(array, separator =','){
    var res = ''
    array.forEach(item =>{
      res = res + item + separator 
    })
    return res.slice(0, -1)
  },

  last: function(array){
    return array[array.length - 1]
  },

  lastIndexOf: function(array, value, fromIndex = array.length - 1){
    if( fromIndex < 0){
      fromIndex += array.length
    }
    for(let i = fromIndex;i >= 0;i--){
        if( array[i] === value){
          return i
        }      
    }
     
    return -1  
  },

  nth: function(array, index = 0){
    if (index >= 0 ){
      return array[index]
    } else {
      return array[array.length + index]
    }
  },

  pull: function(array, ...values){
   
    var res = []
    for(var i = 0; i < array.length; i++){
      if( !values.includes(array[i])){
        res.push(array[i])
      }
    }
    return res 
  },

  pullAll: function(array, values){
   
    var res = []
    for(var i = 0; i < array.length; i++){
      if( !values.includes(array[i])){
        res.push(array[i])
      }
    }
    return res 
  },

  reverse: function(array){
    var res = []
    for(var i = array.length -1 ; i >= 0 ; i--){
      res.push(array[i])
    }
    return res
  },

  sortedIndex: function(array, value){
    var l = 0
    var r = array.length - 1 
    
    if(array[r] < value){
      return r + 1
    }    
    while(l < r){
      var mid = (l + r) / 2 | 0
      if(array[mid] < value){
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
 
  },
  sortedIndexOf: function(array, value){
    return jk_jk.sortedIndex(array, value)
  },

  sortedLastIndex: function(array, value){
    var l = 0
    var r = array.length - 1 
    
    if(array[r] <= value){
      return r + 1
    }    
    while(l < r){
      var mid = (l + r) / 2 | 0
      if(array[mid] <= value){
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
   },

  sortedLastIndexOf: function(array, value){
    for(var i = array.length - 1;i >= 0;i--){
      if(array[i] = value){
        return i
      }
    }
    return -1
  },


  sortedUniq: function(array){
    return array.filter((item, index) => item !== array[index - 1])
  },


  sortedUniqBy: function(array, iteratee){
    var res = [-99999]
    for(var i = 0; i < array.length;i++){
      if(iteratee(array[i]) > iteratee(res[res.length - 1])){
        res.push(array[i])
      }
    }
    res.shift()
    return res
  },

  tail: function(array){
    array.shift()
    return  array
  },

  take: function(array, [n=1]){
    let res = []
    for(var i = 0;i < n;i++){
      res.push(array[i])
    }
    return res
  },


}
