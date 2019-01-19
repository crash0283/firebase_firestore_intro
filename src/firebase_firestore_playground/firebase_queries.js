import db from '../firebase/firebase'

//Using the method 'where()' we can query our data and only get data back that meets our requirements such as
//getting all the users that live in the city 'Dallas'
//The 'where()' method is case-sensitive, so make sure you use lower-case when possible
//We can also use the 'empty' property on 'snapshot' to check if any documents exist and provide error, if not
//We can use the following condition operators to check: >, <, >=, <=, ==
// db.collection('users').where('location.city','==','Dallas').get().then((snapshot) => {
//     if(snapshot.empty) {
//         return console.log("Can't find results based on query!")
//     }

//     snapshot.docs.forEach((doc) => {
//         console.log(doc.data())  
//     })
    
// }).catch((e) => {
//     console.log(e)
// })


//We can also sort our data by using the 'orderBy()' method
//'orderBy()' takes a string argument to sort by such as name, age, date, etc.
//We can also pass in an optional argument, either 'asc' or 'desc' to return the results in descending or ascending order
// db.collection('users').orderBy('name').get().then((snapshot) => {
//     if(snapshot.empty) {
//         return console.log("Can't find results based on query!")
//     }

//     snapshot.docs.forEach((doc) => {
//         console.log(doc.data())  
//     })
    
// }).catch((e) => {
//     console.log(e)
// })

//We can also chain on our 'where()' method to filter and then our 'orderBy()' method to sort
//When we go to do this, we get an error in the console that we need to create an index based on our query since
//its more complex and Google makes it easy by providing a link we can click on that will bring us to our console
//where we can just click to create the index we need
// db.collection('users').where('location.city','==','Dallas').orderBy('name').get().then((snapshot) => {
//     if(snapshot.empty) {
//         return console.log("Can't find results based on query!")
//     }

//     snapshot.docs.forEach((doc) => {
//         console.log(doc.data())  
//     })
    
// }).catch((e) => {
//     console.log(e)
// })