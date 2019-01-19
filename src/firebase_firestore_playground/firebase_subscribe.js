import db from '../firebase/firebase'

//'onSnapshot()' method allows us to listen for any changes in our database and update our results in real-time
// db.collection('users').onSnapshot((snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//         console.log(change.doc.data())
//     })
// })