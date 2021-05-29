// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python/5e8b595e3d9a4a002405b7f6

const DNAStrand = (dna) => {
	dna = dna.split('')
	dna.forEach((letter, i) => {
		switch (letter) {
			case 'A':
				dna[i] = 'T'
				break
			case 'T':
				dna[i] = 'A'
				break
			case 'C':
				dna[i] = 'G'
				break
			case 'G':
				dna[i] = 'C'
				break
		}
	})

	return dna.join('')
}

DNAStrand('ATTGC') // -> 'TAACG'
DNAStrand('GTAT') // -> 'CATA'
