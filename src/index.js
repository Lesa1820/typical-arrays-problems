
exports.min = function min (array) {
  if(array.length !== 0){
    return Math.min.apply( Math, array );
  }
  return 0;
}

exports.max = function max (array) {
  if(array.length !== 0){
    return Math.max.apply( Math, array );
  }
  return 0;
}

exports.avg = function avg (array) {
  var x = array.length , sum = 0;
  for(let i = 0;i < x;i++){
    sum = sum + Number(array[i])
  }
   sum = sum / x;
  return sum;
}
