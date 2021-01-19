
function sumOfArray(numbers) {
    var sum = 0;
    for(var i = 0 ; i < numbers.length ; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
var numbers = [2,3,5,5,10];
var result = sumOfArray(numbers);

console.log(result);