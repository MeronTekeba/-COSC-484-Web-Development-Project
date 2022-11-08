function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      const tableSection = document.getElementById("table");
      tableSection.getElementsByTagName("p")[0].innerText = json[0].name;
      tableSection.style.visibility = "visible";
    });
}
