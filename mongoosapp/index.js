const express = require('express');
const mongoos = require('mongoose');



const app = express();
const product = require('./models/product');
app.use(express.json());

mongoos.connect('mongodb://127.0.0.1:27017/PSL', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log('connected to db.....');
    app.listen(3000,()=>{
        console.log("server Started....");
    });
}).catch((err) =>{
    console.log('error .....');
});
app.get('/',(req,res)=>{
  res.send('<h1>Hello World!...</h1>')
});
app.get('/products',(req,res)=>{
    product.find().then((rus)=>{
        res.json(rus);
    })
});
app.get('/products/:code',(req,res)=>{
    let code = req.params.code;
    product.find({code:code}).then((rus)=>{
        res.json(rus);
    })
});
app.delete('/product/:code',(req,res)=>{
    let code = req.params.code;
    product.deleteOne({code:code}).then((rus)=>{
        res.json(rus);
    })
});
app.post('/products',(req,res)=>{
    let code = req.body.code;
    let name = req.body.name;
    let price = req.body.price;

    let pro = new product({
        code:code,
        name:name,
        price:price
    });
    pro.save().then((data) =>{
        res.json(data);
    })
});
app.put('/products/:code',(req,res)=>{
    let code = req.params.code;
    let name = req.body.name;
    let price = req.body.price;

    product.updateOne({code:code},{name:name,price:price}).then((rus)=>{
        res.json(rus);
    })
});
