const {Router} = require('express');
const User = require('../models/user.model');

const router = Router();




router.get('/',(req,res)=>{
    
})


router.post('/',async(req,res)=> {
    try {
        console.log(req.body);
        const {nickname,email,password} = req.body;

        if(nickname&&email&&password) {
            const newUser = await User.addUser(nickname,email,password);
            console.log(newUser);
            return res.json(newUser);
        }else {
            throw new Error('Не все поля заполнены')
        }




    } catch (error) {
        return res.json(error.message).status(501);
    }
})

module.exports = router;