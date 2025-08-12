const monsters = [
  { name: "Slime", hp: 100 },
  { name: "Orc", hp: 150 },
  { name: "Goblin", hp: 80 }
];

function renderMonsters() {
  const container = document.getElementById("monsters");
  container.innerHTML = "";
  monsters.forEach((m, i) => {
    const div = document.createElement("div");
    div.className = "monster";
    div.innerHTML = `${m.name}<br>HP: ${m.hp}`;
    container.appendChild(div);
  });
}

function log(message) {
  const logBox = document.getElementById("log");
  logBox.innerHTML += `<div>${message}</div>`;
}

document.getElementById("attackBtn").onclick = () => {
  monsters[1].hp -= 25; // Example: hit the Orc
  log(`You hit the Orc for 25 damage!`);
  renderMonsters();
};

renderMonsters();
