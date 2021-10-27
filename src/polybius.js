// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
     const alphabet = { a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55", };
     if (!input) return false;
     input.toLowerCase();
     let finalMessage = "";
     if (encode) {
       for (let i = 0; i < input.length; i++) {
         let ticker = input[i];
         if (ticker === " ") {
           finalMessage += " ";
         } else {
           let match = Object.entries(alphabet).find(
             (letter) => ticker === letter[0]
           );
           finalMessage +=  match[1]; 
         } 
       }
     } else {
       let noSpaces = input.replace(/ /g, "");
       if (noSpaces.length % 2 !== 0) {
         return false;
       }
     }
     for (let i = 0; i < input.length; i += 2) {
       let decode = `${input[i]}${input[i + 1]}`;
       if (decode.includes(" ")) {
         finalMessage += " ";
         i -= 1;
       } else if (decode === "42") {
         finalMessage += "i/j";
       } else {
         let found = Object.entries(alphabet).find(
           (letter) => decode === letter[1]
         );
         if (found) {
           finalMessage += found[0];
         }
       }
     }
     return finalMessage.trimEnd();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
