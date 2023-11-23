const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("database connected"))
.catch((err) => console.log(`failed to connect database: ${err}`));