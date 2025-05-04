console.log('Start');

setTimeout(()=> {
    console.log('Timeout 1 executed after 0ms');
}, 0);

Promise.resolve().then(()=>{
console.log('Promise 1 executed');
});
console.log('End');