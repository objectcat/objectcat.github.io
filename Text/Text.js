// var name = "Kevin";
// let age =35;
// const weight =65;

// {
//     var name = "eeee";
//     let age =28;
//     const weight =68;
// }

// console.log(name);
// console.log(age);
// console.log(weight);

function displayTime(){ 
    let date = new Date(); 
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    console.log(`${h}:${m}:${s}<br/>`); 
   } 
//    沒有執行這個方法就沒辦法確認
   displayTime();