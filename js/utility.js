// Selected Player Table Body function Here

function selectedPlayerBody(selectedPlayer) {
  const selectedPlayers = document.getElementById("selected-players");
  selectedPlayers.innerHTML = "";
  for (let i = 0; i < selectedPlayer.length; i++) {
    if (i < 5) {
      const playerName = playerArray[i].playerName;
      var tr = document.createElement("tr");
      tr.innerHTML = `
         <th>${i + 1}</th>
         <td>${playerName}</td>
         `;
    }
    selectedPlayers.appendChild(tr);
  }
}

// selected player cost code here
function totalPlayerCost() {
  const perPlayerCostField = document.getElementById("per-player-cost-field");
  const perPlayerCostString = perPlayerCostField.value;
  const perPlayerCost = parseFloat(perPlayerCostString);

  let number = document.getElementById("selected-player-list");
  let numberString = number.innerText;
  let numbers = parseInt(numberString);

  const totalPlayerExpense = perPlayerCost * numbers;

  const playerCostField = document.getElementById("total-expense-player");
  playerCostField.innerText = totalPlayerExpense;
}
function finalTotalCost() {
  const playerCostField = document.getElementById("total-expense-player");
  const playerCost = parseFloat(playerCostField.innerText);

  const managerCostField = document.getElementById("manager-cost");
  const managerCost = parseFloat(managerCostField.value);

  const coachCostField = document.getElementById("coach-cost");
  const coachCost = parseFloat(coachCostField.value);

  const finalTotalCost = playerCost + managerCost + coachCost;

  const totalFinalCost = document.getElementById("final-total-expense-player");
  totalFinalCost.innerText = finalTotalCost;
}
