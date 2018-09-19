
function fibonacciNumber(fibNumber) {
    if (fibNumber <= 0) return 1;
    return fibonacciNumber(fibNumber - 1) + fibonacciNumber(fibNumber - 2);
}

function fibonacciSequence(fibNumberCount, currentNumber) {
    if (currentNumber >= fibNumberCount) {
        return;
    }
    console.log(fibonacciNumber(currentNumber));
    fibonacciSequence(fibNumberCount, currentNumber + 1);
}

module.exports = {
    fibonacciSequence: function(fibNumberCount) {
        fibonacciSequence(fibNumberCount, 0);
    },
};
