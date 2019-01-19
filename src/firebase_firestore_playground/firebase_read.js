import db from '../firebase/firebase'

//Read data in using the 'get()' method
//Here, we want to read in all our data from our 'user' collection
//We use the 'docs' property to get back the documents but we have to loop through each one using the 'forEach' method
//We then use the 'data()' method to get back our data and since we get it back as objects, we can chain on a property name
//such as 'name' to 'data()' to get back certain pieces of data
db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => console.log(doc.data()))
}).catch((e) => {
    console.log(e)
})