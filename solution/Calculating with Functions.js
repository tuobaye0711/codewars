const calc = (num, input) => {
    if (input) {
        switch (input[0]) {
            case '+':
                return num + input[1];
            case '-':
                return num - input[1];
            case '*':
                return num * input[1];
            case '/':
                return num / input[1];
        }
    } else {
        return num
    }
}

const zero = input => calc(0, input);
const one = input => calc(1, input);
const two = input => calc(2, input);
const three = input => calc(3, input);
const four = input => calc(4, input);
const five = input => calc(5, input);
const six = input => calc(6, input);
const seven = input => calc(7, input);
const eight = input => calc(8, input);
const nine = input => calc(9, input);

const plus = num => ['+', num];
const minus = num => ['-', num];
const times = num => ['*', num];
const dividedBy = num => ['/', num];