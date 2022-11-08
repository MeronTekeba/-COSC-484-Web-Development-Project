function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      console.log(json[0]);
      tableSection = document.getElementById("table");
      table = tableSection.getElementsByTagName("p")[0].innerText;

      table = json[0].name;

      tableSection.style.visibility = "visible";
    });
}