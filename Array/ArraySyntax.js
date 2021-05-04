const title = function (title) {
    console.log('');
    console.log(`===${title}===`);
}

title('一維陣列')
let array1 = [];
let array1 = new Array();
let array1 = new Array(10);

let computer = ['CPU', 'DRAM', 'SSD', 'Mouse'];

console.log(typeof computer);
console.log(computer instanceof Array); 
console.log(Array .isArray(computer));

for (let i = 0; i < computer.length; i++) {
    console.log(computer[i]);
}


computer.forEach(function(item,index)
{
    console.log(`$(index).$(item)`);
});





console.log('.'.repeat(60))