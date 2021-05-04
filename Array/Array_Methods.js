let Computer = ['CPU', 'DRAM' , 'SSD', 'Mouse']; 
let comp = new Array('CPU', 'DRAM' , 'SSD', 
 'Mouse');
let Cars = ['BMW', 'Benz', 'Audi', 'Lexus']; 
let Prices = [280, 320, 250, 210]; 
let Fruits = ['Apple', 'Banana', 'Cherry']; 
let Person = ['John', 35, 'john@gmail.com'];


let friends =['David','Mary','John'];
console.log(friends);
console.log(friends.length);

friends=[]; //重新指派一個空的陣列
friends.length=0;//.length 設為0
friends.splice(0,friends.length); //移除n個陣列列元素

console.log(friends);
console.log(friends.length);






const fruits = ["Apple", "Banana" , "Cherry"]; 


let text1 = fruits[0]+ fruits[1]+ fruits[2];
console.log(text1);

// 陣列加起來 

let text2="";
fruits.forEach((item,index) =>{

    text2 += item;
});
console.log(text2);

// text用來裝字串  forEach後+=放進去 

console.log(fruits.join()); 
// 使用join 加起來

console.log(fruits.join(',')); 
// 使用join 並用,號隔開來

console.log(fruits.join('-'));
// 使用join 並用-號隔開來


//Ex - Push & Pop 好友名單
let Friends =[];

Friends.push("KKK");
// 在陣列中增加元素
Friends.push("BBB");
Friends.push("CCC");

console.log(Friends);

Friends.pop();
// POP 移除末端元素CCC
console.log(Friends);


//陣列合併
var array1 =["A","B","C"];
var array2 =["D","E","F"];

var array3 =array1.concat(array2);//合併多個陣列

// 新方法
console.log(array3);

var array4 = [...array1,...array2];
console.log(array4);



let Cars = ['BMW', 'Benz', 'Audi', 'Lexus']; 

// 車的升降幕
// console.log(Cars);
// console.log(Cars.reverse());
// console.log(Cars.sort());
// console.log(Cars.sort().reverse());


// 搜尋
let car=Cars.find(c => c == "Benz");
console.log(car);

let index = Cars.indexOf("Audi");
console.log(index);

let idx = Cars.findIndex(c => c == "Audi");
console.log(idx);

let Prices =[280,320,250,210];
console.log(Prices.findIndex(p=>p>270));
//findIndex 出來是Index位置的號碼 只選第一個符合條件的數字
console.log(Prices.filter(p=>p>270));
// filter 給出指定範圍 並用陣列顯示符合條件的數字

Prices.filter(function(item,index){
    if(item > 250){
        console.log(Cars[index]+"'s price is " + item +", it's larger 250.")
    }
});
