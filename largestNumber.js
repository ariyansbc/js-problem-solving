

function largestNumber(numbers) {
       
    var larger = numbers[0]
    for(i= 0 ; i < numbers.length ; i++) {
        element = numbers[i];
        if(element > larger) {
            larger = element;
        }
    }
    return larger;
}
var numbers = [21, 10, 12, 66, 50, 47, 61,101];
var largeValue = largestNumber(numbers);

console.log(largeValue);