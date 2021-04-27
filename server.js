const express = require('express')
const multer = require('multer') 

const app = express();

let storage = multer.diskStorage({
   destination: function(req, file, cb) {
      cb(null, 'uploads/')
   },
   filename: function (req, file, cb) { 
      cb(null , file.originalname);   
   }
})

let upload = multer({ storage: storage }).single('file')

app.post('/uploadfiles',(req, res) =>{
   
    upload(req, res, err =>{
       if(err){
          return res.json({ success: false, err})
       }
       return res.json({ success: true, filePtha: res.req.file.path, fileName: res.req.file.filename })
    })
})


app.listen(5000, () => { 
   console.log('Started on port 5000');
});