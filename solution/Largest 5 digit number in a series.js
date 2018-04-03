const solution = digits => {
    let digsArr = []
    let digArr = digits.toString().split('');
    digArr.forEach((d, i) => {
        if (digits.toString().length - i > 4){
            digsArr.push(parseInt(d+digArr[i+1]+digArr[i+2]+digArr[i+3]+digArr[i+4]))
        }
    })
    digsArr = digsArr.map(d => parseInt(d));
    digsArr = digsArr.sort((a,b) => b-a)
    return digsArr[0]
}