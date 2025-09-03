import express from 'express';
import mongoose from 'mongoose';
 
const app = express()
const PORT =3000
const MONGODB_URI = 'mongodb+srv://sudip:sudip123@cluster0.bhw2xer.mongodb.net/express'
//copied value + db name /express

await mongoose.connect(MONGODB_URI).then(()=>{
    console.log('Database Connected')
})

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

