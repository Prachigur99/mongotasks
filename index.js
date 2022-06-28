const express = require('express');
const routes = require('./controllers/routes');
const mongoose = require('mongoose');
const uri = require('./config/mongoURI');

const app = express();

app.use(express.urlencoded({ extended : true },),);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(routes);

const URI = "mongodb+srv://Prachigur99:prachig@cluster0.daxqbuc.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(URI,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
            
        });
    console.log('db connected')
}

connectDB();
const PORT = process.env.PORT || 8000 ;
app.listen(PORT, () => console.log("Started On PORT : " + PORT ));
