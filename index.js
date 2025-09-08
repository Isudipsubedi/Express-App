import express from 'express';

const app = express()
const PORT = 3000

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello Express')
}) 

//get all product
app.get('/api/products', (req, res)=>{
    const products = [
        {id: 1, name: 'Laptop', price: 1000},
        {id: 2, name: 'Desktop', price: 100},
        {id: 3, name: 'Mobile', price: 300},
    ]
    res.status(200).json({products})
})

//get a single product
app.get('/api/products/:id',(req, res)=>{
        const products = [
        {id: 1, name: 'Laptop', price: 1000},
        {id: 2, name: 'Desktop', price: 100},
        {id: 3, name: 'Mobile', price: 300},
    ]

    const product = products.find(p => p.id === Number(req.params.id))

    if(!product){
        return res.status(404).json({message:'Product not found'})
    }

    res.status(200).json(product)
})

// Create a new product
app.post('/api/products',(req, res)=>{
    const newProduct = req.body
    newProduct.id = Date.now()
    res.status(201).json(newProduct)
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})



/*
PROJECT SCAFOLDING:

npmjs.com: express-generator

npm install -g express-generator

express express-app-generated

--Folder created with name express-app-generated

npm install

npm start
*/