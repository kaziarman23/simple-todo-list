const AddBtn = document.querySelector(".AddBtn");
const todoLists = document.querySelector(".todoLists");

function addContent() {

    AddBtn.addEventListener("click", function () {

        const pageContent = document.createElement("div");

        const input = document.querySelector("#input");
        const inputValue = document.createElement("h1");
        if(input.value !== ""){
            inputValue.innerHTML = input.value.toUpperCase();
        }
        else{
            inputValue.textContent = "Name?";
        }
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // adding event on delete button
        deleteBtn.addEventListener("click", function (e) {
            const parentDiv = e.target.parentElement;
            parentDiv.remove();
        });

        // adding class
        pageContent.setAttribute("class", "pageContent");
        inputValue.setAttribute("class", "inputValue");
        deleteBtn.setAttribute("class", "deleteBtn");

        // appending elements
        pageContent.appendChild(inputValue);
        pageContent.appendChild(deleteBtn);
        todoLists.appendChild(pageContent);

        // erasing  values
        input.value = "";
        
    });
}

export default addContent;
