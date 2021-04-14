export function countVowels(string) {
  if (string.match(/[aeiouy]/gi)) {
    return string.match(/[aeiouy]/gi).length;
  } else {
    return "you ain't got no vowels my friend";
  }
}

export const isHaiku = (string1) => {
  return (string2) => {
    return (string3) => {
      if (countVowels(string1) < 5 || countVowels(string2) < 7 || countVowels(string3) < 5) {
        return false;
      } else {
        const lineOneSyllables = countVowels(string1) - countDips(string1) + endsWithE(string1);
        const lineTwoSyllables = countVowels(string2) - countDips(string2) + endsWithE(string2);
        const lineThreeSyllables = countVowels(string3) - countDips(string3) + endsWithE(string3);
        if (lineOneSyllables === 5 && lineTwoSyllables === 7 && lineThreeSyllables === 5) {
          return "You got yourself a haiku! Darn tootin'!"
        } else {
          return "try again :)";
        }
      }
    }
  }
}

// countDips is to count number of dipthongs
export function countDips(string) {
  if (string.match(/ai|ao|au|ay|ee|ia|io|iu|iy|oa|oi|oo|ou|oy|ua|ui|uo|uy|ya|yi|yo|yu|yo|yea|yee/gi)) {
    return string.match(/ai|ao|au|ay|ee|ia|io|iu|iy|oa|oi|oo|ou|oy|ua|ui|uo|uy|ya|yi|yo|yu|yo|yea|yee/gi).length;
  } else {
    return "no dips babey";
  }
}

// endsWithE()

// word = string.split(" ")

// if charAt(word.length - 1) = e && word.length - 2 != le



// const endsWithE = (string) => {
//   return (word = null) => {
//     if (word !== null) {
//       return word.length - 1;
//     }
//     return () => {
//       const word = (string.split(' '));
//       if (word[wordIndex] === e && word[wordIndex - 1] !== l) {
//         return - 1;
//       }
//       return endsWithE(string)(wordIndex - 1);
//     }
//   }
// } 



export const endsWithE = (string) => {
  let sub = 0;
  const wordArray = string.split(' ');
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].charAt(wordArray[i].length -1) === "e" && wordArray[i].charAt(wordArray[i].length - 2) !== "l") {
      sub -= 1;
    }
  }
return sub;
}