const express = require('express');
const Bookdata = require('../model/bookdata');
const Authordata = require('../model/authordata');
const Memberdata = require('../model/memberdata');
const adminRouter = express.Router();


function passNav(nav)
{

    adminRouter.get('/',function(req,res){
        res.render('addbook',{nav});
    });

    adminRouter.post('/add',function(req,res){
    
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            web: req.body.web,
            imageinput: req.body.imageinput,
            fileinput: req.body.fileinput
        }

        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });

   adminRouter.post('/delete',function(req,res){
            const id = req.query.id;
            var query = {_id:id}; 
            Bookdata.deleteOne(query, function(err,result){
                if (err) {

                    console.log("error query");
        
                } else {
                    
                    console.log(result);
                    res.redirect('/books');
        
                }
            })
    });

    adminRouter.post('/update',function(req,res){
            const id = req.body.id;
            console.log(id);
            var query = { _id: id};
            var newvalues = { $set: {
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                web: req.body.web,
                imageinput: req.body.imageinput,
                fileinput: req.body.fileinput
                } };

            Bookdata.updateOne(query, newvalues, function(err, result) {
                if (err) {

                    console.log("error query");
        
                } else {
                    
                    console.log(result);
                    res.redirect('/books');
        
                }
            })
        });

    adminRouter.post('/authordelete',function(req,res){
        const id = req.query.id;
        var query = {_id:id}; 
        Authordata.deleteOne(query, function(err,result){
            if (err) {

                console.log("error query");
    
            } else {
                
                console.log(result);
                res.redirect('/authors');
    
            }
        })
    });

    adminRouter.post('/updateauthor',function(req,res){
        const id = req.body.id;
        console.log(id);
        var query = { _id: id};
        var newvalues = { $set: {
            name: req.body.name,
            country: req.body.country,
            web: req.body.web,
            imageinput: req.body.imageinput
            } };

        Authordata.updateOne(query, newvalues, function(err, result) {
            if (err) {

                console.log("error query");
    
            } else {
                
                console.log(result);
                res.redirect('/authors');
    
            }
        })
    });

    adminRouter.post('/addmember',function(req,res){
    
        var item = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            dob: req.body.dob,
            district: req.body.district,
            phone: req.body.phone,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password
        }

        var member = Memberdata(item);
        member.save();
        res.redirect('/');
    });

    adminRouter.post('/login',function(req,res){
        var email = req.body.email;
        var password = req.body.password;
        Memberdata.findOne({email:email})
        .then(function(member){
            if(password==member.password){
                res.redirect('/books');
            }
            else{
                res.redirect('/?message=Password Mismatch');
            }
           
        })
        
    });

    return adminRouter;
}
module.exports = passNav;