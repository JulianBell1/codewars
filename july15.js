//  1.  6kyu

    //  A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

    //  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

    function isPangram(string){

        let check = string.split('')

        // console.log(check), is now array

        console.log(check.includes('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'))

        
        
      }

    isPangram('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')


        // very close! 

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



      // solution

      function isPangram(string) {
        const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
      
        return alphabetList.every((letter) => string.toLowerCase().includes(letter));
      }
      

//  2.  8kyu

          // When provided with a letter, return its position in the alphabet.

          // Input :: "a"

          // Ouput :: "Position of alphabet: 1"


          function position(letter){

            const alphabet = ['abcdefghijklmnopqrstuvwxyz']
            
          }

          //close again

          //solution

          function position(letter){
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
          }


//  3.  7kyu

        // The national go-kart racing competition is taking place in your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

        // Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

        // The organizers want a podium that satisfies:

        //     The first place platform has the minimum height posible
        //     The second place platform has the closest height to first place
        //     All platforms have heights greater than zero.

        // Task

        // Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.
        // Examples (input -> output)

        // 11 ->   [4, 5, 2]
        // 6  ->   [2, 3, 1]
        // 10 ->   [4, 5, 1]




        function racePodium(blocks) {
          
          let first = Math.floor(blocks / 2)
          let second = (first - 1)
          let third = (blocks - (first + second))

          return [second, first, third]

        }

        //intial attempt, right idea but was off on the formation of 1st place

        //solution

        function racePodium(blocks) {
          let first = Math.ceil(blocks/3)+1;
          let second = first - 1;
          let third = blocks-first-second;
          if (third == 0) {
            third = 1
            second -= 1
          }
          return [second,first,third]
        }


    //Parameter
      // blocks - the number of total blocks to create the podium

    //Result
      // return array of podium contstruction, with none less than 1 , the 2nd place is closest to 1st, and first has the minmum height possible

    //Example
      // 11 ->   [4, 5, 2]
      // 6  ->   [2, 3, 1]
      // 10 ->   [4, 5, 1]

    //Pseudocode
      // take input to determine how many total blocks there are
      // 1st place is total number of blocks / 2 (rounded down)
      // 2nd place is 1st place - 1
      // 3rd place is remaining blocks 