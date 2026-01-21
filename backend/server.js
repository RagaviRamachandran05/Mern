const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Mongoose connected successfully"))
.catch(err => console.log(err));

app.use('/auth',require('./routes/authRoutes'))
app.use('/task',require('./routes/taskRoutes'))

app.get('/api', (req, res) => {
    res.send('hello from express');
});

app.post('/api', (req, res) => {
    res.json(req.body);
});

app.listen(4000, () => {
    console.log("Running on port 4000");
});
