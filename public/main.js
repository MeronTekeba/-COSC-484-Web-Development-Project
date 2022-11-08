function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      const tableSection = document.getElementById("table");
      
      for (names in json[0]) {
        tableSection.getElementsByTagName("p")[0].innerText += names;
      }

      tableSection.style.visibility = "visible";
    });
}