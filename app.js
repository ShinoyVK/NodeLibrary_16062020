const express = require('express');
const app = express();

var nav = [
    {
        name:"BOOKS",
        link:"/books"
    },
    {
        name:"AUTHORS",
        link:"/authors"
    },
    {
        name:"SIGN UP",
        link:"/signup"
    },
    {
        name:"ADD BOOK",
        link:"/addbook"
    }
];  

var form = [
    {
        label:"Email",
        tag:"<input required type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$\">"
    },
    {
        label:"Password",
        tag:"<input type=\"password\" id=\"pass1\" class=\"form-control\" pattern=\".{8,}\"  required title=\"8 characters minimum\">"
    },
    {
        name:"",
        tag:"<button type=\"submit\" class=\"btn btn-success\" onclick=\"validate();\">Login</button>"
    }
]
  
const booksRouter = require('./src/routes/booksrouter')(nav);
const authRouter = require('./src/routes/authrouter')(nav);
const upRouter = require('./src/routes/signuprouter')(nav);
const addbookRouter = require('./src/routes/addbookrouter')(nav);

app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');


app.use('/books',booksRouter);
app.use('/authors',authRouter);
app.use('/signup',upRouter);
app.use('/addbook',addbookRouter);

app.get('/', function(req,res){
    res.render('index', {nav,form});
});

app.listen(3030);
