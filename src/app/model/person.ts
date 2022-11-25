export class Person {

    // public firstName:string="";
    // public lastName:string="";
    // public gender:string="";
    // public address:string="";
    // public city:string="";
    // public state:string="";
    // public zipcode:string="";
    // public mobileNumber:string="";

    public firstName:string="";
    public lastName:string="";
    public gender:string="";
    public address:string="";
    public city:string="";
    public state:string="";
    public zipcode:string="";
    public mobileNumber:string="";
   
    
    constructor(firstName:string,lastName:string,
                gender:string,
                address:string,city:string,
                state:string,zipcode:string,
                mobileNumber:string){
                        
                    this.firstName=firstName;
                    this.lastName=lastName;
                    this.gender=gender;
                    this.address=address;
                    this.city=city;
                    this.state=state;
                    this.zipcode=zipcode;
                    this.mobileNumber=mobileNumber;                   
    }    

}
