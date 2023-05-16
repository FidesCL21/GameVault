document.getElementById("search-button").addEventListener("click", function() {
  var searchInput = document.getElementById("search-input").value;
  if (searchInput === "Cyberpunk 2077") {
    window.location.href = "/Pages/RPG.html";
  } else if (searchInput === "Sims 4") {
    window.location.href = "/Pages/Simulation.html";
  } else if (searchInput === "FIFA 2023") {
    window.location.href = "/Pages/Sports.html";
  } else if (searchInput === "Civilization VI") {
    window.location.href = "/Pages/Strategy.html";
  } else if (searchInput === "Need For Speed Unbound") {
    window.location.href = "/Pages/Racing.html";
  } else if (searchInput === "Assassin's Creed Valhalla") {
    window.location.href = "/Pages/Action.html";
  }
});