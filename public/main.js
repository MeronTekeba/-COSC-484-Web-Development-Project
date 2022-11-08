function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      const tableSection = document.getElementById("table");
      table = tableSection.getElementsByTagName("p")[0].innerText;
      table = json[0].name;
      detailsElement.style.visibility = "visible";
    });
}