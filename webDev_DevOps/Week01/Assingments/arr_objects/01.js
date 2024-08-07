let users = [{
    name : "vaibhav" ,
    age : 21 ,
    gender : "male"
},{
    name : "deeya" ,
    age : 21 ,
    gender : "female"
},{
    name : "jha" ,
    age : 17 ,
    gender : "female"
}] ;


function adult_age(users) {
    return users.filter(user => user.age > 18);
}

function adult_age_gender(users) {
    return users.filter(user => user.age > 18 && user.gender === "male");
}



let adults1 = adult_age(users);
let adults2 = adult_age_gender(users);
console.log(adults1);
console.log("------------")
console.log(adults2);