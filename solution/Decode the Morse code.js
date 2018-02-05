const decodeMorse = morseCode => morseCode.replace(/^\s{2,}|\s{2,}$/g, '').replace(/\s{2}/g, ' SpAcE').split(/\s/).map(str => str === 'SpAcE' ? ' ' : MORSE_CODE[str]).join('')

//注：morseCode.replace(/^\s{2,}|\s{2,}$/g, '')可改用morseCode.trim()来替代