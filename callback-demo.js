function sum (n1,n2,callback){
    s= n1+n2;
    callback(s);
}

function result(summ){
    console.log(`The sum is: ${summ}`);
}

sum(2,45, result);