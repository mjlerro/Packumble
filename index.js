const express = require('express')
const app = express()
const port = 3030

// Serve static html/js/css content publically
app.use(express.static('www'));

const users = [
    "Addison", "Ful", "Mouad", "Devon", "Michael",
    "Lorenzo", "Alex", "Michael", "Scott", "Chris",
    "Phil", "Tj", "Ryan", "Alex", "Kylee", "Emily",
    "Justin", "Josiah", "Samantha", "Samanta",
    "Geoffrey", "Joshua", "Abby", "Caleb",
    "Drew", "Kacey", "Jeremy", "Taejoon",
    "Michael", "Marcus", "Jim", "Keagan", "Sudhanshu", "Rene",
    "Colton", "Austin", "Tyler", "Rishi", "Neel",
    "Parin", "Aaron", "Nicholas", "Bryce", "Sam",
    "Brian", "Alex", "TJ", "Travis", "Eve", "Zhonghe", "Tyler"
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {

    console.log("/users");
    res.json(users);
})
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})