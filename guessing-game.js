const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


function askrange() {
    rl.question('enta min? ', answer1 => {

        rl.question('enta max? ', answer2 => {
            console.log('am thinking of a number between ' + answer1 + ' and ' + answer2)


            let secretNumber = randomInRange(Number(answer1), Number(answer2))


            function checkGuess(num) {

                if (Number(num) > secretNumber) {
                    console.log("too high")
                    console.log(false)

                    askGuess()

                } else if (Number(num) < secretNumber) {
                    console.log("too low")
                    console.log(false)
                    askGuess()

                } else if (Number(num) === secretNumber) {
                    console.log("correct")
                    console.log("YOU WON!!!")


                    rl.close()
                }

            }
            const askGuess = () => {
                rl.question("enter a guess? ", checkGuess)
            }
            askGuess()
        })
    })
}


askrange()
