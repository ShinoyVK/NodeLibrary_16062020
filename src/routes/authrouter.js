const express = require('express');
const Authordata = require('../model/authordata');
const authRouter = express.Router();


function passNav(nav)
{ /*
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
    ];*/

    authRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
        res.render('authors',{nav,authors});
        })
    });

    authRouter.get('/:id',function(req,res){
        var id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{nav,author});
        })
    });

    authRouter.post('/update',function(req,res){
        const id = req.query.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('updateauthor',{nav,author});
        })
        
    });

    return authRouter;
}
module.exports = passNav;