function findOdd(A) {
    let count = 0;
    do {
        let i = A.splice(count, 1, 'p')[0];
        if (i !== 'p') {
            let result = [i];
            A.forEach(function (e, index) {
                if (e === i) {
                    i === result[0] ? result.pop() : result.push(i);
                    A.splice(index, 1, 'p');
                }
            });
            if (result.length > 0) {
                return result[0]
            }
        }
        count++;
    } while (A.length > count);
}
