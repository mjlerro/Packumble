const express = require('express');
const app = express()
const port = 3030;

const generateUsers = require('./lib/data');

app.use(express.urlencoded({extended:true}));

// Serve static html/js/css content publically
app.use(express.static('www'));

// Initialize application
let data = [];
let me = {};

app.post('/start', (req, res) => {

  data = generateUsers();
  console.log( req.body );
  me.username = req.body.username;
  me.language = req.body.language;
  res.redirect(`match.html?name=${me.username}`);
})

// Get next card
app.get('/see', (req, res) => {

  if( data.length > 0 )
  {
    res.send( data[data.length-1] );  
  }
  else res.send({});

});

// Swipe left
app.get('/no', (req, res) => {
  data.pop();
  res.send({});
});

// Swipe right, check if match
app.get('/trymatch', (req, res) => {
  let card = data.pop();
  console.log(me);
  console.log(card);
  if( (card.language == me.language && card.match == true) ||
      card.luck == true ) {

    let email = Math.random().toString(36).substring(2);
    res.send({match: true, email: `${email}@ncsu.edu` });
  }
  else res.send({match: false });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})