// const express = require('express');
import express from 'express';

const app = express()

const PORT =3000

//DEFINE A SIMPLE ROUTE

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

