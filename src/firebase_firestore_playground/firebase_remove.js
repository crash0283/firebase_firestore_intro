import db from '../firebase/firebase'

//Remove specific document from database using 'delete()'
//We also use the 'doc()' method which takes an 'id' to target specific documents
//Like all the other methods, 'delete' returns a Promise which we can chain on a 'then()' and 'catch()' methods
// db.collection('users').doc('3sqlS6Nh3TzNejaLjyWx').delete()