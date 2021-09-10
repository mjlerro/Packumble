

function setup() {

  $('#leftbtn').click(function() {

    let card = $("#potentialmatch")[0];
    card.addEventListener("transitionend",() => {
        card.remove();
    });

    card.classList.add("swipeleft");
  });

  $('#rightbtn').click(function() {


  });

  // Load card initial card
  fetch('/see')
    .then( response => response.json() )
    .then( card => {
      createCard( card );
    });

  // Set user name
  const params = new URLSearchParams(window.location.search);

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

}