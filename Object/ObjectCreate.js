var person = {
    name: "Kevin", age: 32,height: 175, weight: 64
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.height);
console.log(person.weight);


console.log(".".repeat(60))


console.log(person["name"]);
console.log(person["age"]);
console.log(person["height"]);
console.log(person["weight"]);


console.log(".".repeat(60))



let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys);
console.log(values);

//語意
keys.forEach((key,index) =>{
    console.log(key +":"+person[key]);

});

//People

let people =[
    {name: "Kevin", age: 32,height: 175, weight: 64},
    {name: "May", age: 28,height: 180, weight: 74},
    {name: "jof", age: 29,height: 195, weight: 84},
    {name: "jofa", age: 289,height: 9195, weight: 854},
    {name: "jofq", age: 279,height: 1195, weight: 824},

];
// 1.Object
console.log(people);
console.log(".".repeat(60))

//2.person
people.forEach((person,index) =>{
    console.log(person);
});
console.log(".".repeat(60))

//person - keys & values

people.forEach((person,index) =>{

    let keys = Object.keys(person);
    let msg = index + ".";

    keys.forEach((key, index)=>{

        msg += key + ":" + person[key] +",";   

     });

     console.log(msg);

    });

    // 0408


    console.log(".".repeat(60))

    
    var person={
        name:"Kevin",
        age:32,
        height:175,
        weight:64,
        bmi:function(){
            //object literal語法需要⽤this才能存取到本⾝屬性
            return this.weight/ ((this.height / 100) ** 2);
            // 兩個*號是指平方的意思
        }

    };
    console.log(person);

    console.log(person.bmi());

    var person = {
        name: "Kevin", age: 32,height: 175, weight: 64,
    };
    // 用let會報錯

    var person = {
        name: "Kevin", age: 32,height: 175, weight: 64,
        bmi:function(){
            return"BMI";
        }

    };

    console.log(person);
    console.log("The Object is %o:" ,person);
    // console.log("The Object is %o:" ,JSON.stringify(person));

var josnText = JSON.stringify(person);
console.log(typeof josnText);
// 顯示純文字

console.log(".".repeat(60))

var p =JSON.parse(josnText);
console.log(p);
// 顯示內文
console.log(".".repeat(60))

console.log(typeof p);
// 變回Object

