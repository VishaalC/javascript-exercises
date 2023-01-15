const findTheOldest = function(objArr) {
    let oldestPerson;
    let oldObject;

    oldAge = objArr.reduce(ageCalc, 0);
    
    function ageCalc (old, person) {
        let birth = person.yearOfBirth;
        let death = person.yearOfDeath;
        
        if (!death) {
            const date = new Date();
            death = date.getFullYear();
        }
        
        let age = death - birth;
        if (age > old) {
            old= age;
            oldestPerson = person.name;
        }
        return old;

    }
    // return oldestPerson;
    for (let i = 0; i < objArr.length; i++) {
        if (objArr[i].name === oldestPerson) {
            oldObject = objArr[i];
        }
    }
    return oldObject;

};

// Do not edit below this line
module.exports = findTheOldest;
