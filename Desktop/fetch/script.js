async function getData() {
  let player = document.querySelector('input').value;
  let apiKey = "ce5bcc4f189b1abeb1631bbc127d5b7eb0ccdb0d5eb4099a0e7a605a34344dd0";
  let url = `https://apiv3.apifootball.com/?action=get_players&player_name=${player}&APIkey=${apiKey}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    display(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function display(data) {
  // Check if data is valid
  if (!data) {
    document.getElementById('player-container').innerHTML = "<p>No player found.</p>";
    return;
  }

  // Extract first player info
  let playerInfo = data[0];
  console.log(playerInfo)

  let result = `
    <img src="${playerInfo.player_image}" class="w-[100px] h-[100px] rounded-full shadow-[0px_0px_10px_black]" alt="player image">
    <p class=''><strong>Name:</strong> ${playerInfo.player_name}</p>
    <p class=''><strong>Age:</strong> ${playerInfo.player_age}</p>
    <p class=''><strong>Shirt Number:</strong> ${playerInfo.player_number}</p>
    <p class=''><strong>Team:</strong> ${playerInfo.team_name}</p>
  `;
  document.getElementById('player-container').classList.remove("hidden")
  document.getElementById('player-container').innerHTML = result;
}



