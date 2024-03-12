document
  .getElementsByClassName("contacts-button")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName(
      "contact-cards-container"
    )[0].style.display = "block";
    document.getElementsByClassName("group-cards-container")[0].style.display =
      "none";
    document.getElementsByClassName(
      "contacts-button"
    )[0].style.backgroundColor = "#fff";
    document.getElementsByClassName("groups-button")[0].style.backgroundColor =
      "inherit";
    document.getElementsByClassName("number-of-contacts")[0].innerHTML =
      "11 CONTACTS";
  });

document
  .getElementsByClassName("groups-button")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName(
      "contact-cards-container"
    )[0].style.display = "none";
    document.getElementsByClassName("group-cards-container")[0].style.display =
      "block";
    document.getElementsByClassName("groups-button")[0].style.backgroundColor =
      "#fff";
    document.getElementsByClassName(
      "contacts-button"
    )[0].style.backgroundColor = "inherit";
    document.getElementsByClassName("number-of-contacts")[0].innerHTML =
      "8 GROUPS";
  });
