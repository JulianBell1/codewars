//  1.  8kyu

        // Complete the solution so that it reverses all of the words within the string passed in.

        // Example:

        // "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

        function reverseWords(str){
            return str.split(' ').reverse().join(' ')
          }

          //got it! 

    
//  2.  7kyu

            // Trolls are attacking your comment section!

            // A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

            // Your task is to write a function that takes a string and return a new string with all vowels removed.

            // For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

            // Note: for this kata y isn't considered a vowel.


            // couldn't get it

            const disemvowel = (str) => {
                const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
                let newStr = '';
                for (let i = 0; i <= str.length; i++) {
                  let char = str.charAt(i);
                  if (vowels.indexOf(char) == -1) {
                    newStr += char;
                  }
                }
                  return newStr;
                  
                
              };

              //or 

            //   const vowels = 'aeiou';

            //     function disemvowel(str) {
            //       return str
            //         .split('')
            //         .filter(letter => !vowels.includes(letter.toLowerCase()))
            //         .join('');
            //     }

            // or 

            // function disemvowel(str) {
            //     var vowels = ['a', 'e', 'i', 'o', 'u'];
                
            //     return str.split('').filter(function(el) {
            //       return vowels.indexOf(el.toLowerCase()) == -1;
            //     }).join('');
            //   }


//  3.  6kyu

            // You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

            // Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

            // []                                -->  "no one likes this"
            // ["Peter"]                         -->  "Peter likes this"
            // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
            // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
            // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

            // Note: For 4 or more names, the number in "and 2 others" simply increases.

            function likes(names) {
            
                if(names.length === 0){
                    return `no one likes this`
                } else if(names.length === 1){
                    return `${names[0]} likes this`
                } else if(names.length === 2){
                        return `${names[0]} and ${names[1]} like this`
                } else if (names.length === 3){
                    return `${names[0]}, ${names[1]} and ${names[2]} like this`
                } else if(names.length === 4){
                    return `${names[0]}, ${names[1]} and 2 others like this`
                } else if( names.length >= 5){
                    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
                }
                }
                
                // got it! 


                //other solutions

                // function likes(names) {
                //     return {
                //       0: 'no one likes this',
                //       1: `${names[0]} likes this`, 
                //       2: `${names[0]} and ${names[1]} like this`, 
                //       3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
                //       4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
                //     }[Math.min(4, names.length)]
                //   }



//  4.  7kyu


            // Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

            // Your task is to write a function maskify, which changes all but the last four characters into '#'.
            // Examples

            // "4556364607935616" --> "############5616"
            //      "64607935616" -->      "#######5616"
            //                "1" -->                "1"
            //                 "" -->                 ""

            // // "What was the name of your first pet?"

            // "Skippy" --> "##ippy"

            // "Nananananananananananananananana Batman!"
            // -->
            // "####################################man!"

            function maskify(cc) {

                let replaced = ''

                    for(let i = 0; i < maskify.length; i++){        // couldn't quite figure this out, but the rest would work. 
                          return replaced += '#'                    // found solution below 
                    }

                if(cc.length === 0){
                    return ''
                } else if(cc.length >= 1 && cc.length <= 4){
                    return cc
                } else if(cc.length >= 5){
                    // let start = cc.slice(0, -5)
                    let end = cc.slice(-4, -1)
                    return replaced + end
                }
            }

            // solution

            function maskify(cc) {

                if(cc.length === 0){
                    return ''
                } else if(cc.length >= 1 && cc.length <= 4){
                    return cc
                } else if(cc.length >= 5){
                      return '#'.repeat(cc.length - 4) + cc.substr(-4);
                }
            }

            //overall solid effort and quite close! 

            //another solution that is close to mine

            function maskify(cc) {
                cc = cc.split("");
                for(var i = 0; i < cc.length - 4; i++){
                  cc[i] = "#";
              }
              
              cc = cc.join("");
              return cc
              }


//  5.  8kyu

        // Sentence Smash

        // Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
        // Example

        // ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

        function smash (words) {
  
            let firstPass = words.toString()
            let secondPass = firstPass.replaceAll(',', ' ')     ///this works but only for the first ','. How do i replace all in the string? 
            
            return secondPass
      };

      //couldn't figure it out

      //solution

      smash = function (words) {
        return words.join(" ");
      };

      //or 

      const smash = words => words.join(' ');
