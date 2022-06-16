//  ARRAYS

//  1.  8kyu

        // Convert number to reversed array of digits

        // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
        // Example(Input => Output):

        // 348597 => [7,9,5,8,4,3]
        // 0 => [0]

        function convert(num){
            let arr = num.split('').map( num => {return Number(num)})
        }

        // not it ^, wasn't using String to start

        // solution: 

        function digitize(n) {
            return String(n).split('').map(Number).reverse()
          }

        // or 

        function digitize(n){
            return (n + '').split('').map(Number).reverse();
          }

//  2.  8kyu

        // Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
        // Examples

        // Input: [1, 5.2, 4, 0, -1]
        // Output: 9.2

        // Input: []
        // Output: 0

        // Input: [-2.398]
        // Output: -2.398


        function sum (numbers) {
            
            let add = String(numbers).split('').join(' ')

            let trial = add.reduce( (acc, c) => acc + c, 0)

            console.log(trial)
        };

        sum(363)

        //overthinking this....solution: 

        function sum(numbers) {
            return numbers.reduce((a, b) => a + b, 0);
          }