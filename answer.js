// // Part II: JavaScript Reps
// // Easy Going
// // Write a for loop that will log the numbers 1 through 20.
// for (let i = 0 ;i < 21; i++){
//     console.log(i)
// }
/////////////////////////////////
// // Write a for loop that will log only the even numbers in 0 through 200.
// // Hint: Think about the increment expression.

for(let i =+ 2 ;i < 201 ;i += 2){
    console.log(i)
}

/////////////////////////////////
// // This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
// // Write a javascript application that logs all numbers from 1 - 100.

for(let i = 0 ; i < 101 ; i++ ){
    console.log(i)
}
/////////////////////////////////
// // If a number is divisible by 3 log "Fizz" instead of the number.
// //// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// // If a number is divisible by 5 log "Buzz" instead of the number.

for(let i = 0 ; i < 101 ; i++){
    if(i % 5 === 0 && i % 5 === 0){
        console.log("Fizz")
    } else if( i % 5 === 0 ){
        console.log("Buzz")
    } else if(i % 3 === 0){
        console.log("FizzBuzz")
    } else{
        console.log(i)
    }
}

//////////////////////////////
// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// ARRAY INDEX UPDATE
wolfy[2] = 17;
wolfy[3] = "Yukon Territory"; 
dart.push("hawkin")
wolfy.reverse()
wolfy.pop()
wolfy.push("Gameboy")
wolfy.reverse()
//CONSOLE
console.log(dart)
console.log(wolfy)

///////////////////////////////
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

const ninjaTurtles = ["Donatello" , "Leonardo" , "Raphael" , "Michaelangelo"]
for (const turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase())
} /// took some time !!!

////////////////////// Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8]);
favMovies.sort();
favMovies.pop();
favMovies.push("Guardian of the galaxy");
favMovies.shift();
favMovies.unshift();
favMovies.splice(3,1,'Avatar') // No
const sliceIt= Math.floor(favMovies.length / 2); // i get undifined 
const length = favMovies.length;
console.log(favMovies)
///////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1,1);
whereIsWaldo[2][2] ="No one";
console.log(whereIsWaldo);
////////////////////////
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
const message = "...human...why you taking pictures of me?..." 
// for (let i = 0 ; i < 21 ; i++){
//     if (i % 2 === 0){
//     console.log(message + "Love me, pet me! HSSSSSS!")
//     }
// }  ////// had hard time solving this 
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// i have to go over the methods again i havent had time to look over them ...
