const promise1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('執行成功,會呼叫resolve方法')
    },3000);
});

promise1
.then (result=>{
    console.log(result);
})

.catch (ex=>{
    console.log('Error:'+ex);
})

.then (result=>{
    console.log('Promise finally done');
});

const promise2=new Promise(function(resolve,reject){
    setTimeout(()=>{ resolve('Promise解析成功')
    },3000);
});

promise2
.then (result=>{
    console.log(result);
})

.catch (ex=>{
    console.log('Error:'+ex);
})

.then (result=>{
    console.log('Promise finally 完成');
});



const promise3=new Promise(function(resolve,reject){
    setTimeout(()=>{ reject('電腦出錯')
    },3000);
});

promise3
.then (result=>{
    console.log("成功的回傳值"+result);
}, function(ex){
    console.log("失敗原因"+ex);
});
console.log(promise3);
