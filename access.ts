class X {
    private b1:string ="BB";
    protected b2:number=300;
    public b3:string ="B3"
    b4:number=6000
    constructor(){
        console.log("inside b c0ntructor");
    }

    fnb(){
        console.log("inside fnb, class B",this.b1,this.b2,this.b3)

    }

    
}

class Y extends X{
    a1:String="AA"
    a2:number=200
    constructor(){
        super();
        console.log("Inside A's Constructor")
    }

    fna(){
        console.log("Inside fna, class A",this.b2,this.b3);

    }
}

class Z extends Y{
    x1:String="AA"
    x2:number=200
    constructor(){
        super();
        console.log("Inside Z's Constructor")
    }

    fnz(){

        super.fnb();
        console.log("Inside fna, class A",this.b2,this.b3);

    }
}


let c = new Y();
let b = new Z();

c.fna();
b.fnz();


console.log("public specified",c.b3)

