//Ex1 - 建立Set
let set = new Set();
set.add(1); 
set.add(3); 
set.add(5); 
set.add(7); 
console.log(set); 
console.log('size : ' + set.size) 
console.log('type : ' + typeof set);

//Ex2 - delete刪除特定元素
set.delete("iPhone");
//Ex3 - clear()清除所有
set.clear(); 