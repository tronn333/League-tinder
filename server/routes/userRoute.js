const {Router} = require('express');
const User = require('../models/user.model');

const router = Router();


router.get('/',(req,res)=> {
    const user = User.getUserById(1);
    const roles = User.getRoles(1);
    res.json({user,roles}).status(200);
})

router.get('/settings',(req,res) => {

})

router.post('/settings',(req,res) => {
    const {roles} = req.body;
    User.setRoles(roles,1);
    res.status(200);  
})



module.exports = router;