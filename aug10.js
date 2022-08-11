//  1.  

    // Given an array of integers.

    // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

    // If the input is an empty array or is null, return an empty array.
    // Example

    // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

    function countPositivesSumNegatives(input) {

        let newArray = input.split(' ')

        for(let i = 0; i < newArray.length; i++){
            if(i > 0){
                i++
            } else if (i < 0){
                i.reduce(e => e + i)
            }
        }

        return newArray
    }

    console.log(countPositivesSumNegatives(1, 4, 6, 0, -2))

    //Parameters
            // input, want an array
    //Returns
            //return the count of +ives and sum of -ives
    //Examples
    //Pseudocode 
        // take input and split into array of each number (is this already complete naturally by input though?)
        // for loop to take the positives and add and negatives and add
        //return as array of two, first with count of positives, second with sum of negatives


    //solutions 
    function countPositivesSumNegatives(input) {
        if (input == null || input.length == 0)
          return [];
        
        var positive = 0;
        var negative = 0;
        
        for (var i=0, l=input.length; i<l; ++i)
        {
          if (input[i] > 0)
            ++ positive;
          else
            negative += input[i];
        }
        
        return [positive, negative];
    }

    //or 

    function countPositivesSumNegatives(input) {
        return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
    }

    //or

    function countPositivesSumNegatives(input) {
        if (!Array.isArray(input) || !input.length) return [];
        return input.reduce((arr, n) => {
          if (n > 0) arr[0]++;
          if (n < 0) arr[1] += n;
          return arr;
        }, [0, 0]);
      }


//  2.  7kyu



        // You are to write an function that takes a string as it's first paramter. This string will be a string of words.

        // You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

        // Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

        // Example

        // modifyMultiply ("This is a string",3,5) 

        // Should return

        // "string-string-string-string-string"

        // Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

        // Simple. Good luck.


        function modifyMultiply (str,loc,num) {
            
            let words = str.split(' ').map(e => {
                for (let i = 0; i < str.length; i++){
                    if ([i] == loc){
                        return e
                    }
                }
            })
                

            
            return words

            } 

            console.log(modifyMultiply('this is a bunch of words', 2, 2))

        //Parameters
            //string, integer-location, intenger-multiply

        //Result
            // the word from the string is located using the integer-location number, and then multiplied by integer-multiply to return a hyphenated string
        //Examples
            //('will you remember', 1, 3)
            //you-you-you
        //Pseudocode 
            //use second parameter to locate index of wanted word
            //


        //was on the right track

        //solutions

        function modifyMultiply(str,i,n) {
            return Array(n).fill(str.split(' ')[i]).join('-');
          } 

          //or

          function modifyMultiply (str,loc,num) {
            return (str.split(" ")[loc]+"-").repeat(num).slice(0,-1)
          } 

          //or

          const modifyMultiply = (s,loc,num) => new Array(num).fill(s.split(' ')[loc]).join('-')

          //or 

          function modifyMultiply (str,loc,num) {
            return Array(num).fill(str.split(' ')[loc]).join('-')
          } 