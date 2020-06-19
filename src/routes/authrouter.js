const express = require('express');
const authRouter = express.Router();


function passNav(nav)
{
    var authors = [
        {
            name:"Elisabeth Badinter",
            country: "France",
            photo:"Elisabeth-Badinter.jpg",
            website: "https://jwa.org/encyclopedia/article/badinter-elisabeth",
            wiki:"https://en.wikipedia.org/wiki/%C3%89lisabeth_Badinter"
        },
        {
            name:"J.K. Rowling",
            country: "United Kingdom",
            website:"https://www.jkrowling.com/",
            wiki:"https://en.wikipedia.org/wiki/J._K._Rowling",
            photo:"J.K.-Rowling.jpg"
        },
        {
            name:"Stephanie-Meyer",
            country: "United States",
            website:"https://stepheniemeyer.com/",
            wiki:"https://en.wikipedia.org/wiki/Stephenie_Meyer",
            photo:"Stephanie-Meyers.jpg"
        },
        {
            name:"James Patterson",
            country: "United States",
            website:"https://www.jamespatterson.com/",
            wiki:"https://en.wikipedia.org/wiki/James_Patterson",
            photo:"James-Patterson.jpg"
        }
    ];

    authRouter.get('/',function(req,res){
        res.render('authors',{nav,authors});
    });

    return authRouter;
}
module.exports = passNav;