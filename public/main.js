function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      tableSection = document.getElementById("table");
      table = tableSection.getElementsByTagName("p")[0].innerText;

      table = "<table border==\"1\"><tr>";
      for (names in json[0]) {
        table += ("<td>" + names + "</td>");
      }
      table += "<tr>";
      for (var i = 0; i < json.length; i++) {
        table += '<tr>';
        for (names in json[i]) {
          table += ('<td>' + json[i][names] + '</td>');
        }
        table += '</tr>';
      }
      table += "</table>";

      tableSection.style.visibility = "visible";
    });
}