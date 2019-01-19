import db from '../firebase/firebase'

//Here, we use the 'ref()' method which means 'reference' and references a specific part in your database
//Leaving it blank just allows us to insert our data at the root level of our database
//The 'set()' method allows us to add data to our database
//This can be any type of data such as strings, booleans, numbers, objects, arrays, etc.
// db.collection('users').add({
//     name: 'Chris Rasch',
//     age: 36,
//     location: {
//         city: "Dallas"
//     }
// }).then(() => {
//     console.log('Data was added!')
// }).catch((e) => {
//     console.log("This failed:",e)
// })

//Challenge
//1. Add a new user to our 'users' collection with the same properties as before

//Challenge Solution
// db.collection('users').add({
//     name: 'Joe Somebody',
//     age: 40,
//     location: {
//         city: "Denver"
//     }
// }).then(() => {
//     console.log('Data was added!')
// }).catch((e) => {
//     console.log("This failed:",e)
// })