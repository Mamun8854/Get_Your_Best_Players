// Select Player Code start Here
let playerArray = [];

function selectedPlayerBody(selectedPlayer) {
  const selectedPlayers = document.getElementById("selected-players");
  selectedPlayers.innerHTML = "";
  for (let i = 0; i < selectedPlayer.length; i++) {
    const playerName = playerArray[i].playerName;

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

  if (playerLegnth <= 5) {
    selectedPlayerBody(playerArray);
  } else {
  }
}
// Select Player Code End Here
