const express = require('express');
const app = express();
const logger = require('morgan');
const User = require('./models/user.model');
const signupRouter = require('./routes/signupRoute');
const signinRouter = require('./routes/siginRoute');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/signup',signupRouter);
app.use('/signin',signinRouter);

app.get('/',async(req,res) => {

}) 


app.listen(6969,()=>{
    console.log('server started');
});