interface I1{
    x1:number
    x2:string
    fn():string
}

class A implements I1 {

    x1:number
    x2:string
    constructor( x1:number
        ,x2:string) {
        this.x1=x1
        this.x2=x2
    }
    fn():string{
        console.log("Inssdfsdg", this.x1,this.x2)

        return"3423423";
    }


}

let a = new A(200,"AAA");
a.fn()

