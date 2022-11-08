function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      console.log("First user in the array:");
      console.log(json[0]);
      console.log("Name of the first user in the array:");
      console.log(json[0].name);

      const detailsElement = document.getElementById("members");
      detailsElement.getElementsByTagName("p")[0].innerText = json[0].name;
      detailsElement.style.visibility = "visible";
    });
}