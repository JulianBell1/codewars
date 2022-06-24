//  1.  7kyu

            // You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

            // It is guaranteed that a and b are both present in arr.


            function consecutive(arr, a, b) {

                arr.split('').map( x => {
  
                if (a, b){
                    return true
                } else {
                    return false
                }
            })
              
            }

    // solution

    function consecutive(arr, a, b) {
        return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
      }

    // or

      function consecutive(arr, a, b) {
        const idxA = arr.indexOf(a);
        const idxB = arr.indexOf(b);
        
        return Math.abs(idxA - idxB) === 1;
      }

    // or

    function consecutive(arr, a, b) {
        for(var i=0; i<arr.length-1; i++){
          if(arr[i]==a)return arr[i+1]==b;
          if(arr[i]==b)return arr[i+1]==a;
      }
      return false;
    }


//  2.  7kyu

            // Mars rover is on an important mission to take pictures of Mars.

            // In order to take pictures of all directions it needs an algorithm to help it turn to face the correct position.

            // Mars rover can face 4 different directions, that would be N, S, E, W. Every time it needs to turn it will call a command turn passing the current position it is facing and the position it wants to face.

            // For example:

            //     if it asks turn N E the expected result would be right
            //     if it asks turn N W the expected result would be left

            // Mars rover can only make one move at a time and it will only request positions that require a single move.

            // Can you write an algorithm that tells if it should move left or right?


            function turn(current, target) {

                if(current === 'N' && target === 'E' || current === 'E' && target === 'S' || current === 'S' && target === 'W' || current === 'W' && target === 'N'){
                    return 'right'
                } else {
                    return 'left'
                }
              }

        // yusssssssss got em

        // interesting solution using an object

                const directions = {
                    N: {W: "left", E: "right"},
                    S: {W: "right", E: "left"},
                    W: {N: "right", S: "left"},
                    E: {N: "left", S: "right"},
                  }

                  function turn(current, target) {
                    return directions[current][target]
                  }

        // using the .includes() method, haven't seen this before

                function turn(current, target) {
                    return "NESWN".includes(current+target) ? 'right' : 'left';
                  }