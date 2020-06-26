const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/bookdata');

function passNav(nav)
{
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render('books',{nav,books});
        })
        
    });

    booksRouter.get('/:id',function(req,res){
        var id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{nav,book});
        })
        
    });

    booksRouter.post('/update',function(req,res){
        const id = req.query.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('updatebook',{nav,book});
        })
        
    });

    return booksRouter;
}
module.exports = passNav;