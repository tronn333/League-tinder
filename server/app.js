const express = require('express');
const app = express();
const logger = require('morgan');


app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res) => {
    
})


app.listen(6969,()=>{
    console.log('server started');
});