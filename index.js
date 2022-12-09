// code your solution here
function saturdayFun(str = "roller-skate") {
    return "This Saturday, I want to " + str + "!";
}
function mondayWork(str = "go to the office") { return "This Monday, I will " + str + "." }




let wrapAdjective = function (strr = "*") {
    // if (strr == "*") {
    return (function inner(str) {
        return "You are " + strr + str + strr + "!"
    })
}
    const encouragingPromptFunction = wrapAdjective("!!!")