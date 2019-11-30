
const mongoclient = require('mongodb').MongoClient;

let url = 'mongodb://127.0.0.1:27017';

mongoclient.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err,client)=>{
    if(err)
        return console.log('error connection db...');
        var db = client.db('PSL');
        console.log('connected to ..' + db.databaseName);
        db.collection('products').insertOne({
            code:'44',
            name:'Monitor',
            price:'10,000'
        });
        client.close();
});

