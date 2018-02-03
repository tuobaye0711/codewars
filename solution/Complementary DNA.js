const changeChar = char => {
    switch (char) {
        case 'A':
            return 'T';
            break;
        case 'T':
            return 'A';
            break;
        case 'C':
            return 'G';
            break;
        case 'G':
            return 'C'
    }
}

const DNAStrand = dna => dna.split('').map(char => changeChar(char)).join('')