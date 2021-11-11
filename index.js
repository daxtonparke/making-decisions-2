// // console.log("hi")

// let backpack = []

// backpack.push('sword', 'shield', 'food')

// // console.log(backpack)

// // let sword = backpack.shift()
// let sword = backpack.splice(0,1)
// // backpack.unshift(sword[0])

// let furcoat = 'fur coat'

// backpack.push(furcoat)

// backpack.pop()

// backpack.push("flint", "blanket", "knife", "toothbrush", "pee bottle")

// let itemcount = backpack.length

// // let backpack2=backpack.splice(2,3)

// // console.log(backpack2[0])

// // for (let i=0; i<backpack.length; i++){
// //     console.log(backpack[i])
// // }

// // for (let i=0; i<backpack2.length; i++){
// //     console.log(backpack2[i])
// // }

// if(backpack.length>= 3){
//     for(let i=0;i<3;i++){
//         console.log(backpack[i])
//     }
// }
// else for( i=0;i<backpack.length;i++){
//     console.log(backpack[i])
// }

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('--------',guessMe)
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guess me is divisable by 4 or 5')
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log('guess me is divisible by 3, 27 subtracted')
        guessMe -= 27
    } else {
        console.log('added 3')
        guessMe += 3
    }
    guessMe += 22
    console.log(`added 22 guess me is now ${guessMe}`)
}
console.log('guess me')