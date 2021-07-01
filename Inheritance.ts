class GP
{
    getGPFeature()
    {
        console.log("Calling GP Feature")
    }
}

class Parent 
{
    getParentFeature()
    {
        console.log("calling Parent Feature")
    }
}

class Child extends Parent,GP
{


    getChildFeature()
    {
        console.log("Calling Child Feature");
    }
}

let ch = new Child();
ch.getChildFeature();
ch.getParentFeature();
ch.getGPFeature();
