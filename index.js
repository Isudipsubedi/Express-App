import express from 'express';


const app = express()

const PORT =3000

app.get('/', (req, res) => {
    res.send('Hello Express')
})


app.get('/error', ()=>{
    throw new Error('This is test error')
})

app.use((err, req, res, next)=>{
    console.error(err.message)
    res.send('Internal server error')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

