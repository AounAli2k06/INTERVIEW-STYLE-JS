let person = {
    name : "aoun",
    age : 19
}

let printName = function (city,liking ) {
    console.log(this.name,"'s age is",this.age,"his city is", city,"and he likes",liking);
}

let run = printName.bind(person,"karachi");
run("js" )


Function.prototype.myBind = function (...argss) {
    let obj = this;
    let params = argss.slice(1)

    return function (...args ) {
        obj.apply(argss[0],[...params,...args])
    }
}

let printName2 = printName.myBind(person,"karachi")
printName2("js")