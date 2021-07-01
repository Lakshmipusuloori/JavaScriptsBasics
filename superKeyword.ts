class CarSr1
{
    getColor()
    {
        console.log("Blue Color")
    }
    getEngine()
    {
        console.log("1500CC")
    }
    getAirbag()
    {
        console.log("Airbag is available in Automatic Variant")
    }
}

class CarSr2 extends CarSr1
{
    getColor()
    {
        console.log("PearlWhite Color")
    }
    getEngine()
    {
        console.log("1800CC")
    }
    getAirbag()
    {
        console.log("Airbag is available in Manual and Automatic Variant")
    }
    getTemplate()
    {
        this.getColor();
        super.getEngine();
        this.getAirbag();

        
    }
}

let car = new CarSr2();
car.getTemplate();