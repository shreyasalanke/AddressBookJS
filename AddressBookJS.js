console.log("Welcome to The Address Book JS Program ") 
const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{3,}$');
const ADDRESS_CITY_STATE_REGEX = RegExp('^[A-Za-z]{4,}$');
const ZIP_REGEX = RegExp('^[1-9]{1}[0-9]{5}$');
const PHONE_REGEX = RegExp('^[1-9][0-9]{9}$');
const EMAIL_REGEX = RegExp("^[\\w-\\+]+(\\.[\\w]+)*@[\\w-]+(\\.[\\w]{2,})?(\\.[a-z]{2,})?$");

class AddressBook {
    constructor(...params) {
        this.firstName = params[0] ;
        this.lastName = params[1] ;
        this.address = params[2] ;
        this.city = params[3] ;
        this.state = params[4] ;
        this.zip = params[5] ;
        this.phoneNumber = params[6] ;
        this.email = params[7] ;
    }


    toString() {
        return 'First Name : ' + this.firstName + ' Last Name : ' + this.lastName +
        ' Address : ' + this.address + ' City : ' + this.city +  ' state : ' + this.state +
        ' zip code : ' + this.zip + ' Phone Number : ' + this.phoneNumber + 
        ' Email : ' + this.email ;
    }

    get firstName() {
        return this._firstName ;
    }
    set firstName(firstName) {
        if(NAME_REGEX.test(firstName)){
            this._firstName = firstName ;
        }
        else{
            throw 'First Name is Incorrect';
        }
    }

    get lastName() {
        return this._lastName ;
    }
    set lastName(lastName) {
        if(NAME_REGEX.test(lastName)){
            this._lastName = lastName ;
        }
        else{
            throw 'Last Name is Incorrect';
        }
    }

    get address() {
        return this._address ;
    }
    set address(address) {
        if(ADDRESS_CITY_STATE_REGEX.test(address)){
            this._address = address ;
        }
        else{
            throw 'Address is Incorrect';
        }
    }

    get city() {
        return this._city ;
    }
    set city(city) {
        if(ADDRESS_CITY_STATE_REGEX.test(city)){
            this._city = city ;
        }
        else{
            throw 'City is Incorrect';
        }
    }

    
    get state() {
        return this._state ;
    }
    set state(state) {
        if(ADDRESS_CITY_STATE_REGEX.test(state)){
            this._state = state;
        }
        else{
            throw 'State is Incorrect';
        }
    }

    get zip() {
        return this._zip ;
    }
    set zip(zip) {
        if(ZIP_REGEX.test(zip)){
            this._zip = zip ;
        }
        else{
            throw 'Zip is Incorrect';
        }
    }

    get phoneNumber() {
        return this._phoneNumber ;
    }
    set phoneNumber(phoneNumber) {
        if(PHONE_REGEX.test(phoneNumber)){
            this._phoneNumber = phoneNumber ;
        }
        else{
            throw 'Phone Number is Incorrect';
        }
    }

    get email() {
        return this._email ;
    }
    set email(email) {
        if(EMAIL_REGEX.test(email)){
            this._email = email ;
        }
        else{
            throw 'Email is Incorrect';
        }
    }
}

{
    try{
        let contact = new AddressBook("Sharan", "Gowdar", "BNGS", "Shivamogga", "Karnataka", "566098", "91 9870986543", "sharan8@gmail.com");
    }catch (error) {
        console.error(error);
    }
}   

{
    let AddressBookArray = new Array() ;
    AddressBookArray.push(new AddressBook("Shreya", "Salanke", "SMGS", "Shivamogga", "Karnataka", "577203", "91 8765674321", "shreya87@gmail.com"));
    AddressBookArray.push(new AddressBook("Sharan", "Gowdar", "BNGS", "Shivamogga", "Karnataka", "566098", "91 9870986543", "sharan8@gmail.com"));
    AddressBookArray.push(new AddressBook("Kendu", "Gowdar", "MYSS", "Shivamogga", "Karnataka", "599807", "91 9876567432", "kendu3@gmail.com"));
    
    AddressBookArray.find(contact => contact.firstName == 'Shreya').firstName = 'Shreya';
      //DeleteContact
    {    
        let indexToBeDel = AddressBookArray.indexOf(contact => contact.firstName=='Shreya')
        
    }
     //number of contacts
    {
        console.log('Number of Contacts in Address Book are : ' + AddressBookArray.reduce((acc, val) => acc + 1,0) );
    }
    //DuplicateEntry
    {
        let newContact = new AddressBook("Sharan", "Gowdar", "BNGS", "Shivamogga", "Karnataka", "566098", "91 9870986543", "sharan8@gmail.com") ;
        if  (       AddressBookArray.filter(contact =>  
                    contact.firstName == newContact.firstName && 
                    contact.lastName == newContact.lastName &&
                    contact.address == newContact.address &&
                    contact.city == newContact.city &&
                    contact.state == newContact.state &&
                    contact.zip == newContact.zip &&
                    contact.phoneNumber == newContact.phoneNumber &&
                    contact.email == newContact.email 
                    ).reduce((acc,val) => acc+1,0)
        > 0) {
            console.log('Duplicate Exists');
        }
        else {
            AddressBookArray.push(newContact);
        }        
    }
    //searchperson
    {
        let givenCity = 'Shivamogga';
        let searchPersonInCityOrState = AddressBookArray.filter(contact => contact.firstName == 'Shreya' && contact.city == givenCity );
        console.log(searchPersonInCityOrState.toString());                                    
    }
   //viewperson
  {
    let givenCity = 'Shivamogga';
    let searchPersonInCityOrState = AddressBookArray.filter(contact => contact.city == givenCity );
    console.log(searchPersonInCityOrState.toString());
  }
 //count by city or state
 {
    let givenCity = 'Shivamogga';
    let countByCity = AddressBookArray.filter(contact => contact.city == givenCity ).reduce((acc,val) => acc+1,0);
    console.log('Count by City ' + givenCity + ' is : ' + countByCity);
 }
//sorting by alphabetically
    const prompt = require('prompt-sync')();
    console.log("Do You Want to Sort the Contacts:  \n1. YES \n2. NO")
    let inputSort = parseInt(prompt("Enter your choice:  "))
    if(inputSort == 1)
  {
    AddressBookArray.sort();
    for(let i = 0; i < AddressBookArray.length; i++)
    console.log(AddressBookArray[i].toString())
  }   
   //sort by city state zip
   console.log("Sort Contacts based on \n1. City \n2. State \n3. Zip \n4. None")
   let inputSort1 = parseInt(prompt("Enter your choice:  "))
   if(inputSort1 == 1)
       console.log(AddressBookArray.sort(function(con1, con2) { return con1.city.localeCompare(con2.city)}))
   if(inputSort1 == 2)
     console.log(AddressBookArray.sort(function(con1, con2) { return con1.state.localeCompare(con2.state)}))
   if(inputSort1 == 3)
       console.log(AddressBookArray.sort(function(con1, con2) { return parseInt(con1.zip) - parseInt(con2.zip)}))
}           