// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 ) return false
    const fullAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    let key = [];
    let duplicateChecker = [];
    for (let i=0; i<alphabet.length; i++){
      const fakeLetter = alphabet[i]
      if (duplicateChecker.includes(fakeLetter)){
        return false;
      }
      duplicateChecker.push(fakeLetter)
      const newObj = {[fakeLetter]: fullAlphabet[i]}
      key.push(newObj)
    }
    const inputArray = input.toLowerCase().split("")
    return encode? _encoder(inputArray, key): _decoder(inputArray, key)
  }
  function _encoder(input, key){
    let results = input.reduce((acc, letter)=>{
      if (letter === " "){
        acc.push(letter)
        return acc
      }
      for (let object of key){
        const values = Object.values(object)
        if (values.includes(letter)){ 
          const found = Object.keys(object)
          acc.push(found[0])
        }
      }
      return acc
    }, [])
    return results.join("")
  }

  function _decoder(inputArray, decoded){
    let results = inputArray.reduce((acc, letter)=>{
      if (letter === " "){
        acc.push(letter)
        return acc;
      }
      for (let object of decoded){
        if (object[letter]){
          acc.push(object[letter])
        }
      }
      return acc;
    },[])
    return results.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
