const createPhoneNumber = n => "(" + n[0] + n[1] + n[2] + ") " + n[3] + n[4] + n[5] + "-" + n[6] + n[7] + n[8] + n[9]

// best solution
const createPhoneNumber = numbers => {
    let format = "(xxx) xxx-xxxx";

    for (let i=0;i<numbers.length;i++){
        format = format.replace('x', numbers[i])
    }

    return format
}