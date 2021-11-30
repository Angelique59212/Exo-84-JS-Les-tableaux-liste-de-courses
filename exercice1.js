// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

let liste = document.getElementById("listeCourse");
for (let i = 0; i < articles.length; i++ ) {
    let elements = document.createElement("li");
    elements.innerHTML = articles[i];
    liste.appendChild(elements);
    let button = document.createElement("button");
    button.style.border = "2px solid black";
    button.addEventListener("click", function () {
        elements.style.display = "hidden";
    });
    elements.appendChild(button);
}







