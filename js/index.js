// Select Player Code start Here
let playerArray = [];

function selectedPlayerBody(selectedPlayer) {
  const selectedPlayers = document.getElementById("selected-players");
  selectedPlayers.innerHTML = "";
  for (let i = 0; i < selectedPlayer.length; i++) {
    const playerName = playerArray[i].playerName;

    // if (selectedPlayer.length < 6) {

    // }

    const tr = document.createElement("tr");
    tr.innerHTML = `
     <th>${i + 1}</th>
     <td>${playerName}</td>
     `;

    selectedPlayers.appendChild(tr);
  }
}

function selectButton(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;
  //   const btnSelect =
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
// Select Player Code End Here

// Calculation Code Satart Herer
