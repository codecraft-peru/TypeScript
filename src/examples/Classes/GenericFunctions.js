function reverse(list) {
    var reversedList = [];
    for (var i = (list.length - 1); i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}

var letters = ['a', 'b', 'c', 'd'];
var reversedLetters = reverse(letters);
console.log(reversedLetters.join(','));
var numbers = [1, 2, 3, 4];
var reversedNumbers = reverse(numbers);
console.log(reversedNumbers.join(','));
