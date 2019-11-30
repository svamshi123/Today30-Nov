const express = require('express');
const app = express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
app.listen(3000, () => {
    console.log('server is up : 3000');
});
app.use(express.static(__dirname  + '/public'));
app.use(express.urlencoded({ extended: true }));
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.send('<h1>Thank u</h1>')
    req.file.filename = req.file.originalname;
    console.log(req.file.filename);
  });