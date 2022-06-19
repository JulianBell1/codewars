//  1.  8kyu

        //  Task
        //  
        //  Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
        //  In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
        //  
        //  Example
        //  
        //  With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
        //  
        //  1 * (2 + 3) = 5
        //  1 * 2 * 3 = 6
        //  1 + 2 * 3 = 7
        //  (1 + 2) * 3 = 9
        //  
        //  So the maximum value that you can obtain is 9.


function expressionMatter(a, b, c) {        //this is working in console, but not in codewars? 
  
    let alpha = a * (b + c)
    let beta = a + (b + c)
    let charlie = a + (b * c)
    let delta = b * (a + c)
    let epsilon = b + (a + c)
    let foxtrot = b + (a * c)
    let georgia = c * (b + a)
    let hotel = c + (b + a)
    let india = c + (b * a)
    let juliet = a + b + c
    let kilo = a * b * c
    
    let arr = [alpha, beta, charlie, delta, epsilon, foxtrot, georgia, hotel, india, juliet, kilo]
    console.log(arr)
    return Math.max(...arr)
    
  }

  console.log(expressionMatter(1, 4, 2))
 

  //solution 

  function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
  }


//  2.  