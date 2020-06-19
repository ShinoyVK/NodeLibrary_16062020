const express = require('express');
const booksRouter = express.Router();


function passNav(nav)
{
    var books = [
        {
            title:"The Conflict: How Modern Motherhood Undermines the Status of Women",
            author:"Elisabeth Badinter",
            photo:"Elisabeth-Badinter.jpg"
        },
        {
            title:"Fantastic Beasts: The Crimes Of Grindelwald",
            author:"J.K. Rowling",
            photo:"J.K.-Rowling.jpg"
        },
        {
            title:"Middle School: How I Survived Bullies, Broccoli, and Snake Hill",
            author:"James Patterson",
            photo:"James-Patterson.jpg"
        },
        {
            title:"The Short Second Life of Bree Tanner: An Eclipse Novella",
            author:"Stephanie Meyers",
            photo:"Stephanie-Meyers.jpg"
        }
    ];

    booksRouter.get('/',function(req,res){
        res.render('books',{nav,books});
    });

    booksRouter.get('/:id',function(req,res){
        var id = req.params.id;
        console.log(id);
        res.render('book',{nav,book:books[id]});
    });

    return booksRouter;
}
module.exports = passNav;