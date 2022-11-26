DESCRIPTION:
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038

//Complementary DNA

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//solution
function dna (str){
    str = str.split('');
    for (let i = 0; i < str.length; i++){
        if (str[i] == 'A')
            return 'T'
        else if (str[i] == 'T')
            return 'A'
        else if (str[i] == 'C')
            return 'G'
        else if (str[i] == 'G')
            return 'C'
    }
}

const DNAStrand = char => char.split('').map(char => dna(char)).join('')
DNAStrand("TAACG")


//solution2
function DNAStrand (dna){
    dna = dna.split('');
    result = ''
    for (let i = 0; i < dna.length; i++){
        if (dna[i] == 'A')
            result += 'T'
        else if (dna[i] == 'T')
            result += 'A'
        else if (dna[i] == 'C')
            result += 'G'
        else if (dna[i] == 'G')
            result += 'C'
    }
    return result
}
DNAStrand("TAACG")
