

function smallestNumber(numbers) {
       
    var smaller = numbers[0]
    for(i= 0 ; i < numbers.length ; i++) {
        element = numbers[i];
        if(element < smaller) {
            smaller = element;
        }
    }
    return smaller;
}
var numbers = [21, 10, 12, 66, 50, 47, 61,101 , 5];
var smallValue = smallestNumber(numbers);

console.log(smallValue);