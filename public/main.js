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
  var urlSearchParams = new URLSearchParams(window.location.search);
  alert(urlSearchParams);
  fetch("api/accounts/" + urlSearchParams)
  .then((res) => res.json())
  .then((json) => {
    alert(JSON.stringify(json));
  });
  return false;
}