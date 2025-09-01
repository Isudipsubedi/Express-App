// const express = require('express');
import express from 'express';
import { searchController, usernameController } from './controller.js';

const app = express()

const PORT =3000

//DEFINE A SIMPLE ROUTE

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/user/:username', usernameController)

// /search?keyword=express
app.get('/search', searchController)

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

