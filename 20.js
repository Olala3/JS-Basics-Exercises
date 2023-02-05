let primitive = 'this is wierd';

if (typeof(primitive) === "number") {
    console.log("it's a Number")
} else if (typeof(primitive) === "boolean") {
    console.log("it's a Boolean")
} else if (typeof(primitive) === "string") {
    console.log("it's a String")
} else {
    console.log("it's undefiend")
}