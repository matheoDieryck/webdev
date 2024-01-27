const setup = () => {
    let result = document.getElementById("getter");
    result.addEventListener('click', txtClick);
}

const txtClick = () => {
    alert("eyo pog");
}

window.addEventListener("load", setup);