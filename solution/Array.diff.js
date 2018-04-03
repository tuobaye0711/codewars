const array_diff = (a, b) => {
   let temp = [];
   a.forEach(el => b.indexOf(el) === -1 ? temp.push(el):void(0)) ;
   return temp
}