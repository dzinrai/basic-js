module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw Error;

  for (let i = 0; i < arr.length; i++) {
    // обход всех удвоителей, с заменой control_sequence(--double-prev или --double-next) 
    // на предыдущее или следующее (i-1 или i+1) значения соответственно
    if(arr[i] === "--double-prev" && i-1>=0  ){
      arr[i] = arr[i-1];
    }else if(arr[i] === "--double-next" && i+1<arr.length){
      arr[i] = arr[i+1];
    }else if( arr[i] === "--double-prev" || arr[i] === "--double-next" ){
      // удалит control_sequence(--double-prev или --double-next) в конце и начале
      arr.splice(i,1);
      i-=1;
    }
  }
  for (i = 0; i < arr.length; i++) {
    // обход всех флагов удаления, с вырезанием control_sequence(--discard-prev или --discard-next) 
    // с предыдущим или следующим (i-1 или i+1) значенем соответственно
    if(arr[i] === "--discard-prev" && i-1>=0 ){
      arr.splice(i-1,2); // отступить в splice индексом на предыдущий и удалить 2 элемента, включая текущий
      i-=1;
    }else if(arr[i] === "--discard-next" && i+1<arr.length ){
      arr.splice(i,2); // выбрать в splice индекс текущий и удалить 2 элемента, включив следующий за ним
      i-=1;
    }else if( arr[i] === "--discard-prev" || arr[i] === "--discard-next" ){
      // удалит control_sequence(--discard-prev или --discard-next) в конце и начале
      arr.splice(i,1);
      i-=1;
    }
  }

  return arr;
};
