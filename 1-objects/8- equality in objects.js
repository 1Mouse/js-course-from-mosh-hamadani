function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address(34, "cairo", 9999);
let address2 = new Address(34, "cairo", 9999);
let address3=address1;

function areEqual(address1, address2) {
    return address1.street === address2.street
        && address1.city === address2.city
        && address1.zipCode === address2.zipCode;
}

function haveSameMemoryAddress(address1, address2) {
    return address1 === address2; //strict equality operator
                                  // === is faster than == as it doesn't execute type conversion
}


console.log(areEqual(address1,address2));
console.log(haveSameMemoryAddress(address1,address2));
console.log(haveSameMemoryAddress(address1,address3));
