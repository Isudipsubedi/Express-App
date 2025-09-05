import express from 'express';

// install packages: npm install jsonwebtoken, npm install bcryptjs
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express()
const PORT = 3000

app.use(express.json())

const users = []

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    users.push({
        username,
        password: hashedPassword
    })

    res.send('user registered')

})


app.post('/login', async (req, res) => {
    const { username, password } = req.body

    const user = users.find(u => u.username === username)
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.send('Not authorized')
    }
    const token = jwt.sign({ username }, 'test#secret')
    res.json({ token })


})

app.get('/dashboard', (req, res) => {
    try {
        const token = req.header('Authorization')
        const decodedToken = jwt.verify(token, 'test#secret')
        if (decodedToken.username) {
            res.send(`Welcome, ${decodedToken.username}`)
        }
        else {
            res.send('access denied')
        }
    } catch (error) {
        res.send('access denied')
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

