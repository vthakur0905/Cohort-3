function greet_vote (user) {
    let pre = "others" ;
    if (user.gender == "male"){
        pre = "mr" ;
    }
    else {
        pre = "mrs" ;
    }

    console.log("hi " + pre + " " + user.name + " your age is " + user.age) ;

    if (user.age > 18){
        console.log("you can vote.");

    }
    else {
        console.log("sorry you cannot vote.")
    }
}

let user = {
    name : "vaibhav" ,
    gender : "male" ,
    age : 21
}


greet_vote(user) ;