function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const tableSection = document.getElementById("table");
      tableSection.style.visibility = "visible";
      string = "";
      json.forEach(function(user) { string.concat(" ", user.name) });

      tableSection.getElementsByTagName("p")[0].innerText = result;
    });
}