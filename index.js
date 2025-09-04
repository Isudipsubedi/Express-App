import express from 'express';
import { connectDB } from './config/db.js';
import { Person } from './models/Person.js';

const app = express()
const PORT = 3000

await connectDB()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Express')
})

//Now we add some route, using which we will perform some CRUD operation

//Saving data in MongoDB
app.post('/person', async (req, res) => {

    const { email, name, age } = req.body
    const newPerson = new Person({
        name,
        age,
        email
    })
    await newPerson.save()
    console.log(newPerson)
    res.send('Person added')
})

//New route for updating user data in the db
app.put('/person', async (req, res) => {
    const { name, age  } = req.body

    //find method
    //findOne, findById
    const personData = await Person.find({name, age})
    console.log(personData)

    res.send('Person updated')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

