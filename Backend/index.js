import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'

const router = express.Router();

dotenv.config();
const mongodbURL = process.env.DBURL;

const app = express();
// app.use(cors());
app.use(cors({
    origin: '*', // Replace with your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (if your frontend sends cookies, sessions, or authentication tokens)
  }));
  

var PORT = 5000;

mongoose.connect(mongodbURL)
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
        required: true,
        unique: true
     },
    email: { type: String, 
        required: true,
        unique: true,
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
        required: true,
        unique: true
     },
    email: { type: String, 
        required: true,
        unique: true,
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
const unsplash_url = 'https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY';