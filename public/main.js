function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const tableSection = document.getElementById("table");
      tableSection.style.visibility = "visible";
      string = "";
      json.forEach(function(user) { 
        string + user.name + ' '; 
        console.log(user);
        console.log(user.name)
      });
      console.log(string);
      tableSection.getElementsByTagName("p")[0].innerText = string;
    });
}