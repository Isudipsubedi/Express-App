import express from 'express';
import multer from 'multer'

//on sending post request from postman the file is saved to the uploads folder
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb)=>{
        cb(null, file.fieldname+'_'+Date.now()+file.originalname);
    }
})

const app = express()
const upload = multer({
    storage:storage,
    limits:{
        fileSize:102400
    }

})
const PORT =3000


app.use(express.urlencoded({extended:true}))
// app.use(upload.array())
app.use(upload.single('image'))

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.post('/form', (req, res)=>{
    console.log(req.body)
    console.log(req.file)
    res.send('Form received')
})



app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
} )

