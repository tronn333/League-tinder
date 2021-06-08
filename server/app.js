const express = require('express');
const app = express();
const logger = require('morgan');
const User = require('./models/user.model');
const signupRouter = require('./routes/signupRoute');
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoute');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/user',userRouter);

app.get('/',async(req,res) => {

}) 


app.listen(6969,()=>{
    console.log('server started');
});