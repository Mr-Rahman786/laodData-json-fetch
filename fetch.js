function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data=>displayToDos(data))
}

function displayToDos(todos) {
    const todocontainer = document.getElementById('todo-container');
    for (const todo of todos){
        const todoDiv = document.createElement('div')
        todoDiv.innerHTML = `
            <h3>title:${todo.title}</h3>
            <p> user: ${todo.userId}</p>
            <p> isCompleted:${todo.completed === true? 'complete':'not copmplete'}</p>
            <p> id:${todo.id}</p>
        `;
        todocontainer.appendChild(todoDiv);
    }
}

loadTodos();


function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
    .then(data=> showphotos(data))
}
function showphotos(photos) {
    const photosContainer = document.getElementById('photos-container');
    for (const photo of photos) {
        const toDiv = document.createElement('div');
        toDiv.innerHTML = `
            <h1>url:${photo.url}</h1>
            <p> <u>title:${photo.title}</u></p>
            <h4>thumbnailUrl:${photo.thumbnailUrl}</h4>
            <h2>id:${photo.id}</h2>
        `;
        photosContainer.appendChild(toDiv);
    }
}
loadPhotos()

