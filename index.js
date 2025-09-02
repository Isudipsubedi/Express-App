import express from 'express';


const app = express()

const PORT =3000

app.use((req, res, next)=>{
    console.log('Start')
    res.on('finish',()=>{
        console.log('end')    
    })
    next()
})

app.get('/', (req, res) => {
    console.log('middle')
    res.send('Hello Express')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

