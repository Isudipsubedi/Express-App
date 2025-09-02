import express from 'express';


const app = express()

const PORT =3000

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/things/:name/:id', (req, res) => {
   const { name, id } = req.params
   if (!/^\d{5}$/.test(id)) {
      return res.status(400).json({ error: 'ID must be exactly 5 digits' });
   }
   res.json({
      id, name
   })
})

// catch all invalid routes
app.get('/*any', (req, res)=>{
   res.send('Sorry, this is an invalid route.')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

