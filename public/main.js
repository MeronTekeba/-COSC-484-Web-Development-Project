function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      const detailsElement = document.getElementById("members").getElementsByTagName("p")[0].innerText;
      string = "";
      for (i = 0; i < json.length; i++) {
        string = string.concat(json[0].name);
      }
      detailsElement = string;
      detailsElement.style.visibility = "visible";
    });
}