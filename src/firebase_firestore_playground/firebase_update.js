import db from '../firebase/firebase'

//To update a document, we need to provide an id and then use the 'update()' method
//The 'update()' method takes an object where we can provide multiple properties to update
// db.collection('users').doc('70D29QyHQACLfdKec2NC').update({
//     age: 50,
//     location: {
//         city: "St. Louis"
//     }
// })


//Challenge
//1. Select one of the documents using it's ID and change job to 'uber driver'
//2. Change email to 'name@uber.com'
//3. Change location city to 'San Francisco'

//Challenge Solution
// db.collection('users').doc('70D29QyHQACLfdKec2NC').update({
//     job: 'Uber Driver',
//     email: 'joe@uber.com',
//     location: {
//         city: 'San Francisco'
//     }
// })