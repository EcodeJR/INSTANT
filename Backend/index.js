import express from 'express';
//import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import newsController from './newsController.js';
const router = express.Router();
// import newsController from './newsController.js';

dotenv.config();
const mongodbURL = process.env.DBURL;

const app = express();
// app.use(cors());

var PORT = 5000;
// var DATABASENAME = 'INSTANT';
// var database;

// app.listen(PORT, () => {
//     console.log('Server is running on port '+ PORT);
//     mongodb.MongoClient.connect(mongodbURL, (err, client) => {
//         if (!err) {
//             database = client.db(DATABASENAME);
//             console.log('Mongo connected');
//         }else{
//             console.log(err);
//         } 
//     });
// })


mongoose.connect(mongodbURL)
    .then((result) => {
        app.listen(PORT, () => {
            const db = result.db;
            console.log('Connected to MongoDB at port: ' + PORT);
        })
    })//Listen for request after conntection has been made to the db
    .catch((err) => console.log(err))


//newslatter code from separete file
const Schema = mongoose.Schema;

const NewsEmails = new Schema({
    email: { type: String, 
        required: true,
        unique: true,
        lowercase: true
     }
}, { timestamps: true });

const Newslatter = mongoose.model('Newslatter', NewsEmails);


//newsController
const newslatter_index = (req, res) => {
    Newslatter.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('/', { result });
        })
        .catch((err) => {
            console.log(err);
        })
}

const newslatter_create = (req, res) => {
    const news = new Newslatter(req.body);

    news.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
}






express.Router();
router.get('/', newslatter_index);
router.post('/addNewslatter', newslatter_create);


// app.get('/newslatters', (req, res) => {
//     database.collection('INSTANT').find({}).toArray((err, result) => {
//         if(!err){
//         res.send(result);
//         }else{
//             console.log(err);
//         }
//     });
// })

// app.post('./api/INSTANT/Newslatter',)