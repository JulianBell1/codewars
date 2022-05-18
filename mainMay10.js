
//  1.  Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language.    Luckily you already use an API that detects the user's location, so this is an easy win.
    // The Task

    // Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
    // Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

    // The Database

    // english: 'Welcome',
    // czech: 'Vitejte',
    // danish: 'Velkomst',
    // dutch: 'Welkom',
    // estonian: 'Tere tulemast',
    // finnish: 'Tervetuloa',
    // flemish: 'Welgekomen',
    // french: 'Bienvenue',
    // german: 'Willkommen',
    // irish: 'Failte',
    // italian: 'Benvenuto',
    // latvian: 'Gaidits',
    // lithuanian: 'Laukiamas',
    // polish: 'Witamy',
    // spanish: 'Bienvenido',
    // swedish: 'Valkommen',
    // welsh: 'Croeso'

    //was very close to getting this, just slightly off on the function

    function greet(lang) {
        return langs[lang]||langs['english'];
      }
      
      var langs = {
      'english': 'Welcome',
      'czech': 'Vitejte',
      'danish': 'Velkomst',
      'dutch': 'Welkom',
      'estonian': 'Tere tulemast',
      'finnish': 'Tervetuloa',
      'flemish': 'Welgekomen',
      'french': 'Bienvenue',
      'german': 'Willkommen',
      'irish': 'Failte',
      'italian': 'Benvenuto',
      'latvian': 'Gaidits',
      'lithuanian': 'Laukiamas',
      'polish': 'Witamy',
      'spanish': 'Bienvenido',
      'swedish': 'Valkommen',
      'welsh': 'Croeso'
      };

        //alternate

        function greet(language) {
            var welcomes = {
              english: 'Welcome',
              czech: 'Vitejte',
              danish: 'Velkomst',
              dutch: 'Welkom',
              estonian: 'Tere tulemast',
              finnish: 'Tervetuloa',
              flemish: 'Welgekomen',
              french: 'Bienvenue',
              german: 'Willkommen',
              irish: 'Failte',
              italian: 'Benvenuto',
              latvian: 'Gaidits',
              lithuanian: 'Laukiamas',
              polish: 'Witamy',
              spanish: 'Bienvenido',
              swedish: 'Valkommen',
              welsh: 'Croeso'
            };
            return language in welcomes ? welcomes[language] : welcomes.english;
          };

        
//  2.  Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
            // Task

            // Write a function that returns both the minimum and maximum number of the given list/array.
            // Examples

            // minMax([1,2,3,4,5])   == [1,5]
            // minMax([2334454,5])   == [5, 2334454]
            // minMax([1])           == [1, 1]


          //very close to having this one again, fucking hell. Was right there but didn't use the ...

            function minMax(arr){
                return [Math.min(...arr), Math.max(...arr)];
              }

              //alternate

              const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];


// 3.   The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

        // For example:
        // 1.08 --> 30

        // got it! 

        function cockroachSpeed(s) {
            let convert = Math.floor(s * 27.7777777778)
            return convert  
          }

        // alternate

        const cockroachSpeed = s => Math.floor(s / 0.036);


//  4.  You are given two interior angles (in degrees) of a triangle.

        // Write a function to return the 3rd.
        // Note: only positive integers will be tested.

        function otherAngle(a, b) {
  
            let third = 180 - a - b
            
            return third;
          }

          //alternate

          const otherAngle = (a, b) => 180 - a - b

