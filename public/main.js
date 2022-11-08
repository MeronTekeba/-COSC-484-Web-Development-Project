function run() {
  fetch("/api/members")
    .then((response) => response.json())
    .then((data) => {
      const detailsElement = document.getElementById("members");

      detailsElement.getElementsByTagName("p")[0].innerText = data.name;

      detailsElement.style.visibility = "visible";
    });
}