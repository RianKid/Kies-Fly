// verstecken Hamburger Menu

const navbarInhalt = document.querySelector(".navbar-inhalt");

// Wenn auf Hamburger-Menu wird geklickt
document.querySelector("#hamburger-menu").onclick = () => {
  navbarInhalt.classList.toggle("verstecken");
};
