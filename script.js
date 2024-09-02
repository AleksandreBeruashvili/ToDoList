const todotext = document.getElementById("taskInput");
const todotextadded = document.getElementById("taskList");

function addTask() {
    if (todotext.value === "") {
        alert("You need to write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = todotext.value;
        todotextadded.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        
        span.setAttribute("onmouseenter", "colorChange(this)")

        span.setAttribute("onmouseout", "colorChangeout(this)")

        
        

        li.appendChild(span);
        

        // alert("Your task is added below");
        todotext.value = "";
    }
}

todotextadded.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);





function colorChange(e){

    console.log(e)
    // const checkedItems = document.querySelectorAll('ul li.checked');

    e.parentElement.style.color="red"

    console.log(e.parentElement)
}

function colorChangeout(e){

    console.log(e)
    // const checkedItems = document.querySelectorAll('ul li.checked');

    e.parentElement.style.color="black"

    console.log(e.parentElement)
}

