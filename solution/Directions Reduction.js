const dirReduc = arr => {
    let newArr = arr.map(dir => {
        switch (dir) {
            case 'NORTH':
                return 1;
            case 'SOUTH':
                return -1;
            case 'EAST':
                return 2;
            case 'WEST':
                return -2;
        }
    })
    for (let i = 0; i < newArr.length - 1;) {
        if (newArr[i] + newArr[i + 1] === 0) {
            newArr.splice(i, 2);
            i = 0;
        } else {
            i++
        }
    }
    return newArr.map(num => {
        switch (num) {
            case 1:
                return 'NORTH';
            case -1:
                return 'SOUTH';
            case 2:
                return 'EAST';
            case -2:
                return 'WEST';
        }
    })
}