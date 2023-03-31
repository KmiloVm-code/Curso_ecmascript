// enahced object literals

function newUser(user, age, country, uId){
    return {
        user: user,
        age: age,
        country: country,
        uId : uId
    }
}

function newUser2(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Oscar', 34, 'MX', 1))
console.log(newUser2('kmilo', 27, 'CO', 1))