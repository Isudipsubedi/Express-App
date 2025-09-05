import express from 'express';
import cookieParser from 'cookie-parser';

const app = express()
const PORT = 3000
app.use(cookieParser())

app.get('/', (req, res) => {
    res.cookie('name','express-app', {maxAge: 360000})
    res.send('Hello Express')
})

app.get('/fetch',(req, res)=>{
    console.log(req.cookies);
    res.send('API Called')
})

app.get('/remove-cookie', (req, res)=>{
    res.clearCookie('name')
    res.send('cookie cleared')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

