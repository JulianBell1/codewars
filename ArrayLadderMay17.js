//  1/ 8kyu

        // Given an array of integers.

        // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

        // If the input is an empty array or is null, return an empty array.
        // Example

        // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].




        function countPositivesSumNegatives(input) {
            let negatives = input.filter( x => {                    //tried input.forEach as well
                if(x < 0){
                    negatives.reduce((acc, c) => acc + c)
                } 
                return negatives
            })

            let positives = input.filter( x => {
                if(x >= 0){
                    postivies.reduce((acc, c) => acc + c)
                }
                return negatives
            })

            let array = [negatives, positives]
            return array

            
        }

        countPositivesSumNegatives(1, 3, 5, 2, -1,)

        //correct answer: 

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



//  2.  7kyu

            // Don't give me five!

            // In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

            // Examples:

            // 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
            // 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

            // The result may contain fives. ;-)
            // The start number will always be smaller than the end number. Both numbers can be also negative!

            //attempt


        function dontGiveMeFive(start, end){

            let array = []

            for(let i = start; i < end; i++){
                array += array[i]
            }

            array.split('').join(',')

            array.splice('5').filter(x => x === 2).length
           
            return array
          
        }

        // answer

        function dontGiveMeFive(start, end) {
            let count = 0;
        
            for (let i = start; i <= end; ++i)
                if (!i.toString().includes("5"))
                    count++;
        
            return count;
        }

        //closer to what I was trying to do 

        function dontGiveMeFive(start, end){
            var arr = [];
            for(var i=start; i<=end; i++){
               arr.push(i);
            }
            var arr1 = [];
            for(var i=0; i<arr.length; i++){
              arr1.push(arr[i].toString());
            }
            var count = 0;
            for(var i=0; i<arr1.length; i++){
              if((arr1[i].match(/5/g) || []).length === 0 )
                count++;
            }
            return count;
            }

          

          
