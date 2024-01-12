function ajouter(){
    let contenant = document.getElementsByClassName("footer");
    let carre = document.createElement("div");

    carre.classList.add("carre-rouge");
    contenant.appendChild(carre);
}

document.getElementById("boutton-ajouter-carre").addEventListener("click", ajouter);