
const names = [
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

const langs = [
  "c#", "python", "javascript"
];


function generateUsers() {

  let users = [];
  for( var name of names ) {
    users.push( generateUser(name) );
  }
  return users;
}

function generateUser(name) {

  return {
    name: name,
    imgId: randInt(150),
    match: randInt(100)>=50,
    luck: randInt(100)<=20,
    language: langs[randInt(3)]
  };
}

function randInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = generateUsers;