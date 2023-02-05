let primitive = 'it is string';



switch (typeof(primitive)) {
    case "number":
        console.log("it's a Number")
        break;
    case "boolean":
        console.log("it's a Boolean")
        break;
    case "string":
        console.log("it's a String")
        break;
    default:
        console.log("it's undefiend")
        break;
}