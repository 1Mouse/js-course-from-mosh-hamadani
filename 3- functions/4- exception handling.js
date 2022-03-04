const person={
    firstName:"Mohamed",
    lastName:"Salah",
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        if(typeof value !=='string')
            throw new Error('Pls enter a string');

        const parts=value.split(' ');
        if(parts.length<2)
            throw new Error('Enter a first and a last name');

        this.firstName=parts[0];
        this.lastName=parts[1];
    }
}

console.log(person.fullName);

try {
    person.fullName="";
}
catch (e){
    //alert(e); if we are front end
    console.log(e);
}
