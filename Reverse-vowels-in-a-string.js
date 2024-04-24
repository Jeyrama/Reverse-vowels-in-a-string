/*
Your goal is to write a function which will reverse the vowels in a string. 
Any characters which are not vowels should remain in their original position. 

Here are some examples:
  "Hello!" => "Holle!"
  "Tomatoes" => "Temotaos"
  "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

For simplicity, you can treat the letter y as a consonant, not a vowel.
*/


// Solution

const reverseVowels = str => {
  let vowels = str.replace(/[^aeiou]/gi, '').split('');
  return str.replace(/[aeiou]/gi, _ => vowels.pop());
};

// or

function reverseVowels(str) {
  const vowels = {
    "A": true,
    "E": true,
    "I": true,
    "O": true,
    "U": true
  }
  const arr = str.split('')
  let p1 = 0;
  let p2 = arr.length - 1
  
  while(p1 < p2){
    const letter1 = arr[p1].toUpperCase()
    const letter2 = arr[p2].toUpperCase()
    if(vowels[letter1] && vowels[letter2]){
      const temp = arr[p1]
      arr[p1] = arr[p2]
      arr[p2] = temp
      p1++
      p2--
    } else if(vowels[letter1]) p2--
      else if(vowels[letter2]) p1++
      else {
        p1++
        p2--
      }
  }
  return arr.join('')
}