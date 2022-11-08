function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      tableSection = document.getElementById("table");
      table = tableSection.getElementsByTagName("p")[0].innerText;

      table = json[0];

      tableSection.style.visibility = "visible";
    });
}