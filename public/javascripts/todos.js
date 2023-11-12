window.onload = function() {
    const inputName = document.getElementById("input-name");
    const inputTask = document.getElementById("input-task");
    const submitBtn = document.getElementById("submit-data");
    const resultText = document.getElementById("result-text");
    const inputSearch = document.getElementById("search-name");
    const searchBtn = document.getElementById("search");
    const searchResultText = document.getElementById("search-result");
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

    searchBtn.addEventListener("click", async () => {
        if (inputSearch.value != null) {
            let url = "http://localhost:3000/user/" + (inputSearch.value).toLowerCase();
            let searchResponse = await fetch(url);
            let json = await searchResponse.json();
            let searchResult = json.result; 
            //Case when user is not found: 
            if (typeof(searchResult) == "string") {
                searchResultText.innerText = searchResult
                //User is found and received as JSON object: 
            } else if (typeof(searchResult) == "object") {
                searchResultText.innerText = "Found the user " + searchResult.name + " with following todos: " + searchResult.todos;
            }
        }
            //console.log(typeof(searchResult));
            /*if () === "User not found.") {
                searchResult.innerText = searchResponse;
            } else {
                let user = await searchResponse.json(); 
                console.log(user);
            }*/

        }
    )
}
