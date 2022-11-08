function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const tableSection = document.getElementById("table");
      
      for (user in json) {
        tableSection.getElementsByTagName("p")[0].innerText += user.name;
      }

      tableSection.style.visibility = "visible";
    });
}