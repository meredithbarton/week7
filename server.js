const express = require("express");
const app = express();

//var exphbs = require("express-handlebars");
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

app.set('port', 3212);

app.use(express.urlenconded({extended:false}));
app.use(express.json());


app.get('/', (req, res) => {
  console.log("hello world");
  res.send('GET Request Received');
})

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

app.post('/',(req, res) => {
  res.send('<h1>POST Request Received</h1>');
})

app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});
