
console.log("Mon premier script JS !");

// 1 - Rechercher l'élément HTML input range et span note
let elemRange = document.querySelector("#fc-note");
let elemNote = document.querySelector(".form-commentaire .range-note .note");

// 2 - Copier la valeur du range dans le span note dès l'affichage de la page
elemNote.textContent = elemRange.value;

// 3 - Copier la valeur du range dans le span note à chaque changement de valeur du range
elemRange.addEventListener("input", () => {
    elemNote.textContent = elemRange.value;
} );



