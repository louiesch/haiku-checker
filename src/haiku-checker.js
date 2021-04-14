export function countVowels(string) {
  if (string.match(/[aeiouy]/gi)) {
    return string.match(/[aeiouy]/gi).length;
  } else {
    return "you ain't got no vowels my friend";
  }
}

export function isHaiku(string) {
  if (countVowels(string) < 17) {
    return false;
  }
}


// countDips()

// endsWithE()

//haiku checker(){
//if (countVowles < 17)
// not a haiku.
//}