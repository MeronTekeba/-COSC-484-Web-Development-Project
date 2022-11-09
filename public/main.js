function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const tableSection = document.getElementById("table");
      tableSection.style.visibility = "visible";
      json.forEach(function(user) { 
        tableSection.getElementsByTagName("p")[0].innerText += user.name + '\n';
      });
    });
}