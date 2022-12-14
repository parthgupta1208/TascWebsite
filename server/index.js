const express = require('express');
const app = express()
const port = 8080;
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const dotenv = require('dotenv').config();
const cors = require("cors");


//middleware import 
const postRoute = require('./Routes/posts')
const coreMembersRoute = require('./Routes/coreMembers')


const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
mongoose.set('strictQuery', true);

// Connect to DB
const dbConnect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            console.log('Connected to DB');
        })
    } catch (err) {
        console.log('Connection Failed');
    }
}

app.get('/', (req, res) => {
    console.log('hello');
    res.status(200).json('live')
})

//middleware 
app.use(express.json())
app.use(helmet());
app.use(morgan('common'));
//middleware
app.use('/post',postRoute)
app.use('/CoreMembers',coreMembersRoute)

dbConnect().then(() => {
    app.listen(port, () => {
        console.log('server running on port ' + port);
        console.log('Open -> ' + 'http://localhost:' + port);

    })
})