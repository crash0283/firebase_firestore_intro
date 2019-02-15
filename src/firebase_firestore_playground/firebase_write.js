import db from '../firebase/firebase'

//Here, we are using the 'collection' method to identify which collection we want to target
//Then, we use the 'add' method to add any type of data we want
//This can be any type of data such as strings, booleans, numbers, objects, arrays, etc.
//If the 'collection' doesn't exist, it will create it then add our data
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