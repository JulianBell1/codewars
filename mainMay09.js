

// 1.   Description

    // We need a function that can transform a string into a number. What ways of achieving this do you know?
    // Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

    var stringToNumber = function(str){
  
        return Number(str)
      }
        //first tryyyy


//  2.  Introduction

        // The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
        // Task
        // Given a year, return the century it is in.

        //couldn't get this one

        const century = year => Math.ceil(year/100)

        //or

        function century(year) {
            return (year + 99) / 100 | 0;
          }

//  3.  Your task is to create a function that does four basic mathematical operations.

        // The function should take three arguments - operation(string/char), value1(number), value2(number).
        // The function should return result of numbers after applying the chosen operation.

        function basicOp(operation, value1, value2){
  
            if(operation == '+'){
              return value1 + value2
            } else if (operation == '-'){
              return value1 - value2
            } else if (operation == '*'){
              return value1 * value2
            } else if(operation == '/'){
              return value1 / value2
            }
          
          }

          //got it

          //alternate

          function basicOp(operation, value1, value2){
              return eval(value1 + operation + value2);
            }

//  4.  Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

        function greet(name){
            return `Hello, ${name} how are you doing today?`
          }

          //easy
          //or

          let greet = name => {return `Hello, ${name} how are you doing today?`}