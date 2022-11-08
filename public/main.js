function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      console.log(json[0]);

      const tableSection = document.getElementById("table");
      

      
      tableSection.style.visibility = "visible";
    });
}