window.onload = function() {
    const inputName = document.getElementById("input-name");
    const inputTask = document.getElementById("input-task");
    const submitBtn = document.getElementById("submit-data");
    submitBtn.addEventListener("click", () => {
        if (inputName.value != null && inputTask.value != null) {
            // Sending POST request: https://www.youtube.com/watch?v=xJAxjstgITk
           fetch("http://localhost:3000/todo", {method: 'POST',
           headers: {
           "Content-type": "application/json"
           }, 
           body: '{"name": "' + inputName.value + '", "todos": "' + inputTask.value + '"}'
           })
           //.then(results => results.json())
           //.then(console.log)        
   
       }
    })
}
/*submitBtn.addEventListener("click", () => {
    if (inputName.value != null && inputTask.value != null) {
         // Sending POST request: https://www.youtube.com/watch?v=xJAxjstgITk
        fetch("http://localhost:3000/todo", {method: 'POST',
        headers: {
        "Content-type": "application/json"
        }, 
        body: '{"name": "' + inputName.value + '", "todos": "' + inputTask.value + '"}'
        })
        .then(results => console.log(results))          

    }
})*/