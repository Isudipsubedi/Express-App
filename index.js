import express from 'express';
import { connectDB } from './config/db.js';
import { Person } from './models/Person.js';
 
const app = express()
const PORT =3000

await connectDB()

app.get('/', (req, res) => {
    res.send('Hello Express')
})

//Now we add some route, using which we will perform some CRUD operation

app.post('/person', express.json(), async (req, res) => {

//body : raw json in postman
//     {
//     "email":"test@eg.com",
//     "name":"test",
//     "age":"10"
//     }

// Now we will destructure this data from req.body object
    const {email, name, age} = req.body
//Store this data in the db
    const newPerson = new Person({
        name,
        age,
        email
    })
    await newPerson.save()
    console.log(newPerson)
    res.send('Person added')
})

//now it is stored in the db cluster-> collection


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

