//  1.  Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

        // For example: ["3:1", "2:2", "0:1", ...]

        // Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

        //     if x > y: 3 points
        //     if x < y: 0 point
        //     if x = y: 1 point

        // Notes:

        //     there are 10 matches in the championship
        //     0 <= x <= 4
        //     0 <= y <= 4





    //my initial start and thought process
                function points(games) {
                    games.forEach( e => {
                                  split(':') )
                                  
                        if(x > y){
                          x += 3
                        } else if(y > x){
                          y += 3
                        } else if(x = y){
                          x += 1
                          y += 1
                        }
                    
                  }
                  
                  //split each element of array into before and after ':'
                  //count number of times x > y
                  //give amount
                  //return points for each team

    // answer

    function points(games) {
        let totalPoints = 0;
        
        for(const game of games){
          const [scoreA, scoreB] = game.split(':');
          
          const points = scoreA > scoreB ? 3 : scoreA === scoreB ? 1 : 0
            totalPoints += points
        }
        return totalPoints
        }

                    //alternate

                    const points=games=>games.reduce((output,current)=>{
                        return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
                      },0)
                    
                    // function points(games) {
                    //   return games.reduce((output,current)=>{
                    //     let x = parseInt(current[0]);
                    //     let y = parseInt(current[2]);
                    //     let value= x>y ? 3 : x===y ? 1 : 0;
                    //     return output+value;
                    //   },0)
                    // }

                    //alternate

                    function points(games) {
                        let total = 0;
                        games.map(game => {
                          if (game[0] === game[2]) {
                            total += 1;
                          } else if (game[0] > game[2]) {
                            total += 3;
                          }
                        });
                        return total;
                      }