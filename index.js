
// argv0 = node path,  argv1 = script name, argv2 = number
if (process.argv.length !== 3) {
    console.error('Expected 1 argument, the number of Fibonacci numbers to show');
    process.exit(1);
}

const numberOfFibonacciNumbers = process.argv[2];

require('./fibonacci').fibonacciSequence(numberOfFibonacciNumbers);
