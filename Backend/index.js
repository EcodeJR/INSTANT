import express from 'express';
import cors from 'cors';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
// import newsController from './newsController.js';

dotenv.config();
const mongodbURL = process.env.DBURL;

const app = express();
app.use(cors());

var PORT = 5000;
var DATABASENAME = 'INSTANT';
var database;

app.listen(PORT, () => {
    console.log('Server is running on port '+ PORT);
    mongodb.MongoClient.connect(mongodbURL, (err, client) => {
        database = client.db(DATABASENAME);
        console.log('Mongo connected');
    });
})


// mongoose.connect(mongodbURL)
//     .then((result) => {
//         app.listen(PORT, () => {
//             const db = result.db;
//             console.log(`Connected to MongoDB at ${db}`);
//         })
//     })//Listen for request after conntection has been made to the db
//     .catch((err) => console.log(err))


// express.Router();
// router.post('/', newsController.newslatter_create);

app.get('/newslatters', (req, res) => {
    database.collection('Newslatter').find({}).toArray((err, result) => {
        res.send(result);
    });
})

// app.post('./api/INSTANT/Newslatter',)