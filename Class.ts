class B{
    b1:string="B1"
    b2:number=3999
    b3:string ="B3"

    constructor(){
        console.log("Inside B's Const")
    }
    fn2(){
        console.log("Inside Class b Function2")
    }
}

class A extends B{
    x1:string ="A"
    x2:string
    x3:number =200

    constructor(a1:string,a2:number,a3:string){
        super()
        this.x1=a1;
        this.x2=a3
        this.x3=a2
        console.log("Inside class a, inside constructor",this.x1,this.x2)
        console.log("Values",a1,a2,a3)
    }

    fn(){
        console.log("Inside fn")
        console.log("values",this.b1,this.b2,this.b3)
        super.fn2();
    }
}

let a = new A("SA",100,"CCC")
a.fn();