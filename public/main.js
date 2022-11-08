function run() {
  fetch("/api/members")
    .then((response) => response.json())
    .then((data) => {
      const detailsElement = document.getElementById("member box");

      detailsElement.getElementsByTagName("p")[0].innerText = data;

      detailsElement.style.visibility = "visible";
    });
}