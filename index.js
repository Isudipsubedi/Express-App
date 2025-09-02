import express from 'express';


const app = express()

const PORT =3000


//install package : npm i ejs 
//ejs: embedded javascript

//SET EJS as the view engine

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
   const userName = 'John Doe'
   // index : view filename
   res.render('index', {userName})
})



app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

