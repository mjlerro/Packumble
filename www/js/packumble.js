

function setup() {

  $('#leftbtn').click(function() {

    let card = $("#potentialmatch")[0];
    card.addEventListener("transitionend",() => {
        card.remove();

        fetch("/no").then( _ =>{
          fetch('/see')
          .then( response => response.json() )
          .then( card => {
            createCard( card );
          });
        });
    });

    card.classList.add("swipeleft");
  });

  $('#rightbtn').click(function() {
    let card = $("#potentialmatch")[0];
    fetch("/trymatch")
    .then( response => response.json() )
    .then( data => {
      console.log(data.match);
      if ( data.match == false ) {
        card.addEventListener("transitionend",() => {
          card.remove();
          fetch('/see')
          .then( response => response.json() )
          .then( card => {
            createCard( card );
          });
        });
        card.classList.add("swiperight");
      } else if ( data.match == true ) {
        card.addEventListener("animationend",() => {
          $("#matcharea").append(card);
          card.classList.remove("fire");
          fetch('/see')
          .then( response => response.json() )
          .then( card => {
            createCard( card );
            flipFunctionality(data.email);
          });
        });
        card.classList.add("fire");
      }
    });

  });

  // Load card initial card
  fetch('/see')
    .then( response => response.json() )
    .then( card => {
      createCard( card );
    });

  // Set user name
  const params = new URLSearchParams(window.location.search);
  $("#username").text(params.get("name"));
}

function createCard(card) {
 
  let template = 
  `
  <div id="potentialmatch" class="p-2 card w-50">
    <div class="card-body">
        <div class="card__face">
          <h5 class="card-title">${card.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${card.language}</h6>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${card.imgId}.png">
        </div>
        <div class="card__face card__face--back"></div>        
    </div>      
  </div>
  `;

  $("#potentialmatch-container").append( template );
}

// Adds flipping functionality to matched cards with email on the back
function flipFunctionality(email) {
  let allCards = [];
  $("#matcharea").children().each((i, card) => {
    allCards.push(card);
  });
  allCards.forEach((card, i) => {
    card.getElementsByClassName("card__face card__face--back")[0].innerHTML = email;
    card.addEventListener("click", function() {
      card.classList.toggle("is-flipped");
    });
  });
}