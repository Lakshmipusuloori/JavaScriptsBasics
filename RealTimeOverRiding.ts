class KFCAmerica
{
    getProduct()
    {
        console.log("KFC Product")
    }
    getLocation()
    {
        console.log("California")
    }
}

class KFCIndia extends KFCAmerica
{
    getLocation()
    {
        console.log("Hyderabad")
    }
}

class KFCUK extends KFCAmerica
{
    getLocation()
    {
        console.log("London")
    }
}

let kfc = new KFCUK();
kfc.getLocation();
kfc.getProduct();