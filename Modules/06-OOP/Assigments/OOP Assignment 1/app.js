
class Calculator {
    constructor(n) {
        this.n = n        
        this.add = function (n) {
            console.log(`${this.n} + ${n} = ${this.n + n}`)
            this.n += n;
            
            return this;
            
        }
        this.subtract = function (n) {
            
            console.log(`${this.n} - ${n} = ${this.n - n}`)
            this.n -= n;
            
            return this;
           
        }
        this.multiply = function (n) {
            
            console.log(`${this.n} x ${n} = ${this.n * n}`)
            this.n *= n;            
            return this;
            
        }
        this.divide = function (n) {
            
            console.log(`${this.n} ÷ ${n} = ${this.n / n}`)
            this.n /= n;
            return this;
            
        }
        this.value = function (n) {
            
            
            return this.n
            
        }
    }
}
const calculator = new Calculator(0);

calculator.add(5).subtract(2).multiply(5).divide(3)

calculator.value()



