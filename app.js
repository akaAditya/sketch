const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose.-connection');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const ownersRouter = require('./routes/ownersRouter');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')

app.use('/', (req, res)=> {
    res.send('Hey welcome to home')
});

app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(5000, ()=> console.log('server running on port 5000'))