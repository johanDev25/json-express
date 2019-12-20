const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true });
mongoose.connection.on("error",function(e){console.error(e);});

app.get("/products", (res, req) =>{

});


app.listen(3000, () => console.log('Listening on port 3000!'));
