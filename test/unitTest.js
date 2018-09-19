var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var fibonacci = require('../fibonacci');

describe('Verify the fibonacci sequence', function() {
    beforeEach(() => {
        sinon.spy(console, 'log');
    });

    it('When I request the fib number 1 and it should return 1 ', function () {
        fibonacci.fibonacciSequence(1);
        expect(console.log).to.have.been.calledWith(1)
    });

    it('When I request the fib number 2 and it should return 2 ', function () {
        fibonacci.fibonacciSequence(2);
        expect(console.log).to.have.been.calledWith(2)
    });

    it('When I request the fib number 3 and it should return 2 ', function () {
        fibonacci.fibonacciSequence(3);
        expect(console.log).to.have.been.calledWith(2)
    });

    it('When I request the fib number 4 and it should return 3 ', function () {
        fibonacci.fibonacciSequence(4);
        expect(console.log).to.have.been.calledWith(3)
    });

    it('When I request the fib number 5 and it should return 5', function () {
        fibonacci.fibonacciSequence(5);
        expect(console.log).to.have.been.calledWith(5)
    });

    it('When I request the fib number 6 and it should return 8 ', function () {
        fibonacci.fibonacciSequence(6);
        expect(console.log).to.have.been.calledWith(8)
    });

    it('When I request the fib number 7 and it should return (1,2,3,5,8,13,21)', function () {
        fibonacci.fibonacciSequence(7);
        expect(console.log).to.have.been.calledWith(1)
        expect(console.log).to.have.been.calledWith(2)
        expect(console.log).to.have.been.calledWith(3)
        expect(console.log).to.have.been.calledWith(5)
        expect(console.log).to.have.been.calledWith(8)
        expect(console.log).to.have.been.calledWith(13)
        expect(console.log).to.have.been.calledWith(21)
    });

    it('When I request the fib number -1 and it should not return anything', function () {
        fibonacci.fibonacciSequence(-1);
        expect(console.log).not.to.have.been.calledWith()
    });

    it('When I request the fib number 0 and it should not return anything', function () {
        fibonacci.fibonacciSequence(0);
        expect(console.log).not.to.have.been.calledWith()
    });

    afterEach(() => {
        console.log.restore()
    });
});


