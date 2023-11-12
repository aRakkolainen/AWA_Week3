window.onload = function() {
    const inputName = document.getElementById("input-name");
    const inputTask = document.getElementById("input-task");
    const submitBtn = document.getElementById("submit-data");
    const resultText = document.getElementById("result-text");

    submitBtn.addEventListener("click", async () => {
        if (inputName.value != null && inputTask.value != null) {
            // Sending POST request: https://www.youtube.com/watch?v=xJAxjstgITk
           let response = await fetch("http://localhost:3000/todo", {method: 'POST',
           headers: {
           "Content-type": "application/json"
           }, 
           body: '{"name": "' + inputName.value + '", "todos": "' + inputTask.value + '"}'
           })
           ;
           let text = await response.text(); 
           resultText.innerText = text;
           
       }
    })
}