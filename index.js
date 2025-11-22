var btn = document.getElementById("add-task-button");
var input = document.getElementById("task-input");
var ul = document.getElementById("task-list");



btn.addEventListener("click", function() {
    


    var taskText = input.value.trim();
    if(taskText === ""){
        alert("Please enter a task.");
    }else{
    var li = document.createElement("li");
    li.innerText = taskText;
     

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.classList.add ("delete-button");
    deleteBtn.addEventListener("click", function() {
        ul.removeChild(li);
    });
    
    
    
    var checkBtn = document.createElement("button");
    checkBtn.innerText = "Not completed!";  // check symbol
    checkBtn.classList.add("check-btn");
    checkBtn.addEventListener("click", function() {

       
        setTimeout(() => {
             if(checkBtn.innerText === "Not Completed!"){
                checkBtn.innerText = " Completed ✔";
                checkBtn.style.backgroundColor = "lightgreen";
            }else{
                checkBtn.innerText = " Not Completed!";
                checkBtn.style.backgroundColor = "lightcoral";
            }
    },300);
        });
       
  
    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    


    buttonContainer.appendChild(checkBtn);
    buttonContainer.appendChild(deleteBtn);
    li.appendChild(buttonContainer);
    ul.appendChild(li);

    input.value = "";
    }
   
});         




input.addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        btn.click();
    }   
});