var prompt = require('prompt - sync')();
class Contact {
    fName;
    lName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;
    constructor(...params) {
        this.fName = params[0];
        this.lName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
    get fName() {
        return this._fName;
    }
    set fName(fName) {
        let fnameRegex = RegExp('^[A-Z]{1}[a-zA-z]{2,}$');
        if (fnameRegex.test(fName)) {
            this._fName = fName;
        }
        else throw 'Invalid Format';
    }
    get lName() {
        return this._lName;
    }
    set lName(lName) {
        let lnameRegex = RegExp('^[A-Z]{1}[a-zA-z]{2,}$');
        if (lnameRegex.test(lName)) {
            this._lName = lName;
        }
        else throw 'Invalid Format';
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp('[0-9]{6}');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        }
        else throw 'Invalid Zip Code';
    }
    get phoneNo() {
        return this._phoneN0;
    }
    set phoneNo(phoneNo) {
        let phoneRegex = RegExp('^[1-9]{1}[0-9]{9}$');
        if (phoneRegex.test(this.phoneNo)) {
            this._phoneNo = this.phoneNo;
        }
        else throw 'Invalid Phone Number';
    }
    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@!%_&])[A-Za-z0-9$#@!%_&]{8,}$');
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else throw 'Invalid Email';
    }
    createContact() {
        this.fName = prompt('Enter the first name');
        this.lName = prompt('Enter the last name');
        this.address = prompt('Enter the address');
        this.city = prompt('Enter the city');
        this.state = prompt('Enter the state');
        this.zip = prompt('Enter the zipcode');
        this.phoneNo = prompt('Enter the phone number');
        this.email = prompt('Enter the email');
        let contact = new Contact(this.fName, this.lastName, this.address, this.city, this.state, this.zip,
            this.phoneNo, this.email);
        return contact;

    }
    toString() {
        return '\nName : ' + this.fName + ' ' + this.lName + '\nAddress : ' + this.address + '\nCity : ' + this.city +
            '\nState : ' + this.state + '\nZip : ' + this.zip + '\nphoneNo : ' + this.phoneNo + '\nEmail : ' + this.email;
    }
}
var addressBook = new Array();
function addContact(contact) {
    addressBook.push(contact);
    if (!checkContact(contact.firstName + contact.lastName)) {
        addressBook.push(contact);
    }else{
        console.log('Already exists');
    }
}
let contact = new Contact();
addContact(contact.createContact());
console.log(addressBook);
//UC4
function editContact(name) {
    addressBook.filter(c => (c.fName + c.lName == name)).forEach(c => editDetails(c));
}
function editDetails(contact) {
    var choice = parseInt(prompt('Enter what u wish to do\n1.Update phoneNumber\n2.Update Address\n3.Update email'));
    switch (choice) {
        case 1:
            var phone = prompt('Enter new phone number');
            contact.phoneNo = phone;
            break;
        case 2:
            var address = prompt('Enter new address');
            contact.address = address;
            break;
        case 3:
            var email = prompt('Enter new email');
            contact.email = email;
            break;
    }
}
//UC5
function deleteContact(name) {
    addressBook.filter(c => (c.fName + c.lName == name));
} 
//UC6
function countEntries() {
    return addressBook.length;
}
//UC7
function checkDuplicate(name) {
    addressBook.forEach(c => {
        if (c.fName + c.lName == name) {
            return false;
        }
    });
}
//UC8
function searchInCity(city, name) {
    return addressBook.filter(c => (c.city == city)).filter(c => (c.fName + c.lName == name));
}
function searchInState(state, name) {
    return addressBook.filter(c => (c.state == state)).filter(c => (c.fName + c.lName == name));
}
//UC9
function getContactByCity(city) {
    addressBook.filter(c => (c.city == city)).forEach(c => console.log(c.fName + ' ' + c.lName));
}
function getContactByState(state) {
    addressBook.filter(c => (c.state == state)).forEach(c => console.log(c.fName + ' ' + c.lName));
}