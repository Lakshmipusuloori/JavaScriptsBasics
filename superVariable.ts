class Cr1
{
      public clr1:String ;
      public getDetails()
      {
          this.clr1="blue";
      }
}

class Cr2 extends Cr1
{
     clr="pearl white";
    public getColor()
    {
        console.log(super.clr1)
    }
}

let cr = new Cr2();
cr.getColor()

