
class country
{
   
    getcountry()
    {
        console.log("Get the country")
    }
}
class India extends country
{


    getIndiacurrency()
    {
        console.log("india's currency is INR");
    }
}
class America extends country
{

    getAmericacurrency()
    {
        console.log("America currency is Dollar");
    }
}
class Europe extends country
{

    getEuropecurrency()
    {
        console.log("Europe currency is EURO");
    }
}



let Am = new America();
Am.getAmericacurrency();
let Ind = new India();
Ind.getcountry();
Ind.getIndiacurrency();
let eur = new Europe();
eur.getcountry();
eur.getEuropecurrency();

