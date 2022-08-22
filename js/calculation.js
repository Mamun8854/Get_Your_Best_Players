// Select Player Code start Here ---->Using Onclick Function<----
let playerArray = [];

function selectButton(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;

  const playerObject = {
    playerName: playerName,
  };
  playerArray.push(playerObject);
  const playerLegnth = playerArray.length;

  if (playerArray.length <= 5) {
    document.getElementById("selected-player-list").innerText = playerLegnth;
    selectedPlayerBody(playerArray);
    element.setAttribute("disabled", "");
    element.style.backgroundColor = "red";
  } else {
    alert("maximum 5 player you can add in your list");
    let allCard = document.querySelectorAll(".card-button");
    for (let i = 0; i < allCard.length; i++) {
      allCard[i].setAttribute("disabled", "");
      allCard[i].style.backgroundColor = "red";
    }
  }
}

// total player Cost start --->using addEventListener<----
document.getElementById("btn-calculate").addEventListener("click", function () {
  totalPlayerCost();
});
// total player Cost end

// final total cost start --->using addEventListener<----
document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    finalTotalCost();
  });

// final total cost end
