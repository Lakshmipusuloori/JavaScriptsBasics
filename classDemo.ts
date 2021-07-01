class Demo2
{
    getDetails3()
    {
        console.log("Calling Details3 Method")
    }
}

class Demo //class
{
    getDetais()  //method Creation
    {
    console.log("Calling Detail Method ")
    }
    getDetails2()
    {
        console.log("Calling Details Method")
    }
}

//let ref = new Constructor(); //object //constructor and class name should be same
//ref.particularMethod

let d = new Demo();
d.getDetais();
d.getDetails2();

let d1 = new Demo2();
d1.getDetails3();

