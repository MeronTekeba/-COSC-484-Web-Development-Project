function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      const tableSection = document.getElementById("table");
      tableSection.getElementsByTagName("p")[0].innerText = "<table border==\"1\"><tr>";
      
      for (names in json[0]) {
        tableSection.getElementsByTagName("p")[0].innerText += ("<td>" + names + "</td>");
      }
      
      tableSection.getElementsByTagName("p")[0].innerText += "<tr>";
      
      for (var i = 0; i < json.length; i++) {
        tableSection.getElementsByTagName("p")[0].innerText += '<tr>';
        for (names in json[i]) {
          tableSection.getElementsByTagName("p")[0].innerText += ('<td>' + json[i][names] + '</td>');
        }
        tableSection.getElementsByTagName("p")[0].innerText += '</tr>';
      }
      
      tableSection.getElementsByTagName("p")[0].innerText += "</table>";

      tableSection.style.visibility = "visible";
    });
}