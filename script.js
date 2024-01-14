const inputField = document.querySelector(".input-field");
const listContainer = document.querySelector("#list-container");
const inputButton = document.querySelector(".input-button");


inputButton.addEventListener("click", function(){
    if(inputField.value == ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");  // append task in list
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");  // create cross sign in add task list
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputField.value = "";
    saveData();
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  // checked or unchecked the list
        saveData();
    }
    else if(e.target.tagName === "SPAN"){     // cross remove the task
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
