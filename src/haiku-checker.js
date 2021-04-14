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
        return true;
      }
    }
  }
}

// countDips is to count number of dipthongs
export function countDips(string) {
  if (string.match(/aw|au|ew|oo|oi|oy|ow|ou/gi)) {
    return string.match(/aw|au|ew|oo|oi|oy|ow|ou/gi).length;
  } else {
    return "no dips babey";
  }
}

// endsWithE()

//haiku checker(){
//if (countVowles < 17)
// not a haiku.
//}