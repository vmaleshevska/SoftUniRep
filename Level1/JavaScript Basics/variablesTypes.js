/**
 * Problem 12.	Variables
 Write a JavaScript function variablesTypes(value) that accepts the following parameters: name, age, isMale (true or false),
 array of your favorite foods. The function must return the values of the variables and their types.
 */
function variablesTypes(name, age, isMale, arr) {
    return "My name is: " + name + " // type is " + typeof (name) + "\n" +
        "My age: " + age + " //type is " + typeof (age) + "\n" +
        "I am male: " + isMale + " //type is " + typeof (isMale) + "\n" +
        "My favourite foods are " + arr + " //type is " + typeof (arr);
}

console.log(variablesTypes("Viktoria", 26, false, ["meat", "chicken", "bananas"]));
