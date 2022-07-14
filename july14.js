//  1.  6kyu

    //  A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

    //  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

    function isPangram(string){

        let start = string.toLowerCase()

        let check = start.split('')

        // console.log(check), is now array

        console.log(check.includes('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'))

        
      }

    isPangram('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')


    //Parameter
      // string

    //Result
      // return True, else return false

    //Example
      // The quick brown fox jumps over the lazy dog

    //Pseudocode
      //  convert string to array
      //  parse/filter through array to see if it contains all letters
      // convert all to lower case
      // return true
      // if not, return false
      