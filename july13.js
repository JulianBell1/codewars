//  1.  8kyu


    //Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

    // Examples:
    // 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
    // 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
    // 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
    // 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

    function isDivisible(n, x, y) {

        if(n % x === 0 && n % y === 0){
            return true
        } else {
            return false
        }

    }

    // got it


//  2.  7kyu

        // Your retro heavy metal band, VÄxën, originally started as kind of a joke, just because why would anyone want to use the crappy foosball table in your startup's game room when they could be rocking out at top volume in there instead? Yes, a joke, but now all the top tech companies are paying you top dollar to play at their conferences and big product-release events. And just as how in the early days of the Internet companies were naming everything "i"-this and "e"-that, now that VÄxënmänïä has conquered the tech world, any company that doesn't use Hëävÿ Mëtäl Ümläüts in ëvëry pössïblë pläcë is looking hopelessly behind the times.

        // Well, with great power chords there must also come great responsibility! You need to help these companies out by writing a function that will guarantee that their web sites and ads and everything else will RÖCK ÄS MÜCH ÄS PÖSSÏBLË! Just think about it -- with the licensing fees you'll be getting from Gööglë, Fäcëböök, Äpplë, and Ämäzön alone, you'll probably be able to end world hunger, make college and Marshall stacks free to all, and invent self-driving bumper cars. Sö lët's gët röckïng and röllïng! Pëdal tö thë MËTÄL!

        // Here's a little cheatsheet that will help you write your function to replace the so-last-year letters a-e-i-o-u-and-sometimes-y with the following totally rocking letters:

        // A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
        // O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
        // a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
        // o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff


        function heavyMetalUmlauts(boringText) {

            boringText.split('').map( x => {
                if( x === 'A'){
                    x.replace(\u00c4)
                }
            }).join('')

        }

        console.log(heavyMetalUmlauts('Anything'))


        // split word to create index
        // take each vowel and transform it into vowel with umlaut
        //join new string

                //above is my attempt, right direction. Needed to create object or array of letters first

                function heavyMetalUmlauts(boringText) {
  
                    const replace = {
                      'A': '\u00c4', 'a': '\u00e4',
                      'E': '\u00cb', 'e': '\u00eb',
                      'I': '\u00cf', 'i': '\u00ef',
                      'O': '\u00d6', 'o': '\u00f6',
                      'U': '\u00dc', 'u': '\u00fc',
                      'Y': '\u0178', 'y': '\u00ff'
                    }
                  
                    return boringText.split('').map(e => replace[e] ? replace[e] : e).join('')
                  }


//  3.  




