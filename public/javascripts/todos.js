window.onload = function() {
    const inputName = document.getElementById("input-name");
    const inputTask = document.getElementById("input-task");
    const submitBtn = document.getElementById("submit-data");
    const resultText = document.getElementById("result-text");
    const inputSearch = document.getElementById("search-name");
    const searchBtn = document.getElementById("search");
    const searchResultText = document.getElementById("search-result");
    const deleteBtn = document.getElementById("delete-user");
    const deleteResult = document.getElementById("delete-result");
    const todoResult = document.getElementById("todo-result");
    submitBtn.addEventListener("click", async () => {
        if (inputName.value != null && inputTask.value != null) {
            // Sending POST request: https://www.youtube.com/watch?v=xJAxjstgITk
           let response = await fetch("http://localhost:3000/todo", {method: 'POST',
           headers: {
           "Content-type": "application/json"
           }, 
           body: '{"name": "' + inputName.value + '", "todos": "' + inputTask.value + '"}'
           });
           let text = await response.text(); 
           resultText.innerText = text;
           
       }
    })

    searchBtn.addEventListener("click", async () => {
        if (inputSearch.value != null) {
            let url = "http://localhost:3000/user/" + (inputSearch.value);
            let searchResponse = await fetch(url);
            let json = await searchResponse.json();
            let searchResult = json.result; 
            //Case when user is not found: 
            if (typeof(searchResult) == "string") {
                searchResultText.innerText = searchResult
                deleteBtn.style.display="none";
                //User is found and received as JSON object: 
            } else if (typeof(searchResult) == "object") {
                searchResultText.innerText = "Found the user " + searchResult.name + " with following todos: ";
                let todos = searchResult.todos; 
                let todosList = document.getElementById("todos");
                todos.forEach(todo => {
                    let todoItem = document.createElement("li");
                    todoItem.setAttribute("class", "delete-task");
                    let todoButton = document.createElement("button");
                    todoButton.innerText = todo; 
                    todoItem.appendChild(todoButton);
                    todosList.appendChild(todoItem);
                    todoButton.addEventListener("click", async () => {
                        let response = await fetch("http://localhost:3000/user/", {method: "PUT", 
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: '{"name": "' + inputSearch.value + '", "todo": "' + todo + '"}'
                    })
                    let todoText = await response.text(); 
                    if (todoText == "Task deleted") {
                        todoItem.style.display = "none"; 
                    }
                    todoResult.innerText = todoText; 
                })
            });
                deleteBtn.style.display="inline";
            }
        }

        }
    )
    deleteBtn.addEventListener("click", async () => {
        console.log("Trying to delete user " + inputSearch.value);
        let deleteUrl = "http://localhost:3000/user/" + (inputSearch.value); 
        let response = await fetch(deleteUrl, {method: "DELETE"})
        let deletionResult = await response.text();
        deleteResult.innerText = deletionResult;
        console.log(deletionResult); 
    })




}
