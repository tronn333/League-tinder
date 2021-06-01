
const {Router} = require('express');
const User = require('../models/user.model');

const router = Router();

router.get('',(req,res)=>{

})

router.post('/',async(req,res) => {
    const {email,password} = req.body;
    try {
        if (email&&password) {
            const user = await  User.getUserByEmail(email);
            if (!user) {
                throw new Error('пользователь не найден')
            }


            if (password === user?.password) {

                return res.json(user);
            }else {
                throw new Error('Неверный пароль')
            }


        }else {
            throw new Error('Заполните все поля')
        }
    } catch (error) {
        res.json(error.message);
    }
})


module.exports = router;