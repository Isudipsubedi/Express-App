import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret: 'sample-secret',
    resave: false,
    saveUninitialized: false

}))

const users = [ ]

app.get('/', (req, res) => {
    res.send('Hello Express')
})

//When we hit this api, we get the users name pw and store them in an array
app.post('/register', async(req, res)=>{
    const { username, password } = req.body
    //we will get username and password from the req.body 

    users.push({
        username,
        password //we can also encrypt this password
    })
    //after getting this we store them in the db ie. array users[]

    res.send('user registered')

})

//login route

app.post('/login', async(req, res)=>{
    const { username, password } = req.body

    // we will add verification
    const user = users.find(u=> u.username === username)
    if (!user || password !== user.password ) {
        return res.send('Not authorized')
    }
    req.session.user= user
    res.send('user Logged in')

})

app.get('/dashboard', (req, res)=>{
    if (!req.session.user){
        return res.send('unauthorized')
    }
    res.send(`Welcome, ${req.session.user.username}`)
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

