import express from 'express';

const app = express()
const PORT = 3000

app.use(express.json())

//event listener : prevents app from crashing

process.on("uncaughtException", (err)=>{
    console.log(err)
    process.exit(1)
})

// can add multiple event listener
process.on('unhandledRejection',(reason, promise)=>{
    console.log(reason);
})

app.get('/', (req, res) => {
    res.send('Hello Express')
}) 

// synchronous error
app.get('/sync-error', (req, res , next) => {
    try{
        throw new Error('something went wrong')
    } catch (error) {
        next(error)
    }
})

// asynchronous error
app.get('/async-error', async(req, res, next)=>{
    try {
        await Promise.reject(new Error('Async Error Occured'))
    } catch (error) {
        next(error)
    }
})



//To handle these error, we will craete middleware
//Global error handling middleware

app.use((err, req, res, next)=>{
    console.error(err.message)
    console.log(err.stack)
    res.status(500).json({message:err.message})
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
