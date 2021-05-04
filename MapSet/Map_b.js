//宣告陣列
var twArray=['tw',41,1,12];
var chArray=['ch',80134,2914,44595];
var usaArray=['usa',9665,146,694];

var map = new Map();  //初始化Map物件

//Ex1 - 加入key-value pairs資料到Map物件
map.set("tw",twArray);
map.set("ch",chArray);
map.set("usa",usaArray);


//Ex2 - 讀取Map成員
console.log(map.get('usa'));
console.log(map.get('tw'));
console.log(map.get('ch'));

//Ex3 - 刪除指定key的key-value pair
map.delete("ch");
console.log(map);

//Ex4 - clear()全部清除
map.clear();



//Ex5 - key & value

for(let [key,value]of map) {
    console.log(`${key}:${value}`);
}

