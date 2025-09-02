import express from 'express';


const app = express()

const PORT =3000

// '/welcome' for single route middleware
app.use('/welcome', (req, res , next)=>{
    console.log('A new req recieved at'+Date.now())
    next()
})

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/welcome', (req, res) => {
    res.send('Welcome to express app')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

