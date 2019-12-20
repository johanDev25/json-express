const express = require('express');
const app = express();
const mongoose = require("mongoose");


app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/products', { useNewUrlParser: true });
mongoose.connection.on("error",function(e){console.error(e);});


app.use('/products', require('./routes/products'))

app.listen(3000, () => console.log('Listening on port 3000!'));
