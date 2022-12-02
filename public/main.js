function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      const tableSection = document.getElementById("table");
      tableSection.style.visibility = "visible";
      json.forEach(function(user) { 
        tableSection.getElementsByTagName("p")[0].innerText += user.name + '\n';
      });
    });
}

/* Verify all requirements met */
function verifyLogin() {
  fetch("api/accounts")
  .then((res) => res.json())
  .then((json) => {
    alert(JSON.stringify(json));
  });
  return false;
}