import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import axios from 'axios';

const router = express.Router();

dotenv.config();
const mongodbURL = process.env.DBURL;

const app = express();

const allowedOrigins = [
  'https://instant-cyan.vercel.app',
  'https://instant-cyan.vercel.app/gallary',
  'https://instant-cyan.vercel.app/booking'
];

app.use(cors({
    origin: 
    function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
    , // Replace with your frontend domain --
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (if your frontend sends cookies, sessions, or authentication tokens)
    optionsSuccessStatus: 200
  }));
  

var PORT = 8080;

mongoose.connect('mongodb+srv://ecode:SimplyIntellecT1.@instant.nfjjwa7.mongodb.net/INSTANT?retryWrites=true&w=majority')
    .then((result) => {
        app.listen(PORT, () => {
            const db = result.db;
            console.log('Connected to MongoDB at port: ' + PORT);
        })
    })//Listen for request after conntection has been made to the db
    .catch((err) => console.log(err))


//Setting up mongoose schema for DB
const Schema = mongoose.Schema;

const NewsEmails = new Schema({
    email: { type: String, 
        required: true,
        unique: true,
        lowercase: true
     }
}, { timestamps: true });

const Newslatter = mongoose.model('Newslatter', NewsEmails);

//contact us scema
const ContactUs = new Schema({
    name: { type: String, 
        required: true
     },
     phone: { type: Number, 
        required: true
     },
    email: { type: String, 
        required: true,
        lowercase: true
     },
     message: { type: String, 
        required: true
     }
}, { timestamps: true });

const UserContact = mongoose.model('Contact_us', ContactUs);

//booking scema
const Booking = new Schema({
    name: { type: String, 
        required: true
     },
     phone: { type: Number, 
        required: true
     },
    email: { type: String, 
        required: true,
        lowercase: true
     },
     location: { type: String, 
        required: true
     },
     date: { type: Date, 
        required: true
     }
}, { timestamps: true });

const UserBooking = mongoose.model('Booking', Booking);

/*
async function GetEmails() {
    try{
    const news = await Newslatter.find();

    // Display each user
    news.forEach(news => {
      console.log(`Email: ${news}`);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
GetEmails();
*/

app.use(bodyParser.json());

// Route to handle adding emails to the newsletter
app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      const newEmail = new Newslatter({ email });
      await newEmail.save();
      res.status(201).json({ message: 'Email added to newsletter!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error)
    }
  });


//Adding route to handle contact form
app.post('/api/contact_us', async (req, res) => {
    try {
      const { name,
        phone,
        email,
        message
     } = req.body;
      const newContactUs = new UserContact({ name,
        phone,
        email,
        message 
    });
      await newContactUs.save();
      res.status(201).json({ message: 'Request added to contact us!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error)
    }
  });

//Adding routes for Booking
app.post('/api/booking', async (req, res) => {
    try {
      const { name,
        phone,
        email,
        location,
        date
     } = req.body;
      const newBooking = new UserBooking({ name,
        phone,
        email,
        location,
        date 
    });
      await newBooking.save();
      res.status(201).json({ message: 'Request added to contact us!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error)
    }
  });





//UNSPLASH API
// const unsplash_url = 'https://api.unsplash.com/photos/?client_id='+process.env.UnSplashKEY;
// console.log(unsplash_url);

// Fetch images from Unsplash
app.get('/api/images', async (req, res) => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: process.env.URLKEY,
        query: 'human', //Search category of the images
        count: 20, // Number of images to be displayed
      },
    });

    const images = response.data.map((photo) => ({
      id: photo.id,
      url: photo.urls.regular,
      alt: photo.alt_description,
    }));

    res.json(images);
  } catch (error) {
    console.log('Error fetching images from Unsplash:', error);

    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});