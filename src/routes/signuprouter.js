const express = require('express');
const upRouter = express.Router();


function passNav(nav)
{

    upRouter.get('/',function(req,res){
        res.render('signup',{nav});
    });

    return upRouter;
}
module.exports = passNav;