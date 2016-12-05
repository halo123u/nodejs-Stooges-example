var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('view options', {layout: true});
app.set('views', __dirname + '/views');


app.get('/stooges/:name?', (req,res,next)=>{
    var name = req.params.name;

    switch(name ? name.toLowerCase() : ''){
        case 'larry':
        case 'curly':
        case 'moe':
            res.render(`stooges`, {stooges:name});
            break;
        
        default:
        next();
    }
});

app.get('/stooges/*?', (req,res)=>{
res.render('stooges', {stooge: null});
});

app.get('/?',(req,res)=>{
res.render('index');
});


var port = 8080;
app.listen(port);
console.log (`listening on port ${port}`);