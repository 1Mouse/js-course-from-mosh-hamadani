const person={
    firstName:"Mohamed",
    lastName:"Salah",
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};

console.log(person.fullName);

person.fullName='Terry Henry';
console.log(person.fullName);