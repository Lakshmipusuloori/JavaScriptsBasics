
class rbiBank 
{
    getRBIinterest()
    {
        console.log(" RBI interest");
    }

    getAffilation()
    {
        console.log("Afflilated by RBI")
    }
}
class SBIbank extends rbiBank
{


    getSBIinterest()
    {
        console.log(" SBI interest is 8%");
    }
}
class HDFCbank extends rbiBank
{

    getHDFCinterest()
    {
        console.log("HDFC interest is 9%");
    }
}
class ICICIbank extends rbiBank
{

    getICICIinterest()
    {
        console.log("ICICI interest is 10%");
    }
}



let sbi = new SBIbank()
sbi.getSBIinterest();
sbi.getAffilation()
let hdfc = new HDFCbank();
hdfc.getHDFCinterest();
hdfc.getAffilation()
let icici = new ICICIbank()
icici.getICICIinterest();
icici.getAffilation();

