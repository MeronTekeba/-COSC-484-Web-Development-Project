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
  query = "?email=" + document.getElementById('floatingInput').value 
  + "&pass=" + document.getElementById('floatingPassword').value;
  alert(query);
  fetch("api/accounts/" + query)
  .then((res) => res.json())
  .then((json) => {
    alert(JSON.stringify(json));
  });
  return false;
}