interface I1{
    (a:number,b:number):number;

}

let add:I1=(a,b)=>{
    return a+b;
}

console.log(add(100,200))

function f1(x1:number,x2:number):number{
    console.log("Inside fn1",x1,x2)
    return x1+x2;
}

function f2(a1:number,a2:number){
    console.log("Inside fn2" ,a1,a2);

    return a1*a2;
}

let i1:I1=f1

console.log(i1(2000,3000));

i1=f2
console.log(i1(7000,8000))

function f3(b1:number,b2:number):number{
    console.log("Insdie f3",b1,b2)

    return b1-b2;
}

i1=f3


console.log(i1(50000,5000))