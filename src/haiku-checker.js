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
      if (countVowels(string1) < 5 || countVowels(string3) < 5 || countVowels(string2) < 7) {
        return false;
      } else {
        const firstPhrase = countVowels(string1) - countDips(string1);
        const secondPhrase = countVowels(string2) - countDips(string2);
        const thirdPhrase = countVowels(string3) - countDips(string3);
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

//haiku checker(){
//if (countVowles < 17)
// not a haiku.
//}

//yee yea yao