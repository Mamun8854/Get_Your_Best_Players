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

  document.getElementById("selected-player-list").innerText = playerLegnth;
  if (playerArray.length < 6) {
    selectedPlayerBody(playerArray);
    element.setAttribute("disabled", "");
    element.style.backgroundColor = "red";
  } else {
    let allCard = document.getElementsByClassName("card-button");
    allCard.setAttribute("disabled", "");
    allCard.style.backgroundColor = "red";
  }
}
// Select Player Code End Here
