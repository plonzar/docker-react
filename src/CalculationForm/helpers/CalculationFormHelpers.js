const resolveOperation = (firstNum, secondNum, operation) => {
    switch (operation) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum
        case '*':
            return firstNum * secondNum
        case '/':
            return secondNum !== 0 ? (firstNum / secondNum) :  'Can\'t divide by 0';   
        default:
            throw Error('Unsupported opperation');
    }
}


const calculate = (numberOne, numberTwo, operation) => {
    const firstNum = parseInt(numberOne);
    const secondNum = parseInt(numberTwo);

    if (isNaN(numberOne)) { return 'No. One is not passed' };
    if (isNaN(numberOne)) { return 'No. Two is not passed' };

    return resolveOperation(firstNum, secondNum, operation);
}

export default calculate;