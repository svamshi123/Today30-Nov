const mongoclient = require('mongodb').MongoClient;

let url = 'mongodb://127.0.0.1:27017';
var db = ' ';
mongoclient.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err,client)=>{
    if(err)
        return console.log('error connection db...');
        db = client.db('PSL');
        console.log('connected to ..' + db.databaseName);
});

module.exports = db;