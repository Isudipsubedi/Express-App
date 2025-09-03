import express from 'express';


const app = express()

const PORT =3000

//PUG
// app.use(express.static('public'))
// app.use(express.static('images'))

//to expose this folder on virtual path
app.use('/public', express.static('public'))
app.use('/images', express.static('images'))


app.get('/', (req, res) => {
    res.send('Hello Express')
})



app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

