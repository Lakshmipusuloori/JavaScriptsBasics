class Student
{
    id: number;
    name :String;

    constructor(id:number ,name:String)
    {
        this.id = id;
        this.name = name;
    }

    getDetails()
    {
        console.log(this.id +""+ this.name)
    }
}

let s = new Student(10 ,"Mahesh")
s.getDetails();