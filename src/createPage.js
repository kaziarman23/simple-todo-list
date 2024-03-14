const plus = document.querySelector(".plus");
const inputConteiner = document.querySelector(".inputConteiner");

function createPage() {
    plus.addEventListener("click", function () {
        inputConteiner.style.display = "flex";
    });
}

export default createPage;
