// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

    /*ESERCIZIO 1*/

window.onload = function() {
    document.querySelector(".blog-sidebar div:nth-child(3) .list-unstyled li:nth-of-type(2)").remove();

}

    /*ESERCIZIO 2*/

let aFiglio = document.getElementsByClassName("stretched-link");

for (let i=0; i<aFiglio.length; i++){
aFiglio[i].onclick = function(event) {
    event.preventDefault();
    event.target.closest("div").remove();
}
}

    /*ESERCIZIO 3*/

let autore = document.querySelectorAll(".blog-post .blog-post-meta a");

for (let i=0; i<autore.length; i++){
    autore[i].addEventListener("mouseover", function() {
        alert("Il nome dell'autore è " + autore[i].textContent);
    });
}
