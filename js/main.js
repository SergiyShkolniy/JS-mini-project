const nav = document.getElementsByTagName("nav")[0];
const menuIcons = document.getElementsByClassName("menu-icon");

for (const menuIcon of menuIcons) {
    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("open")
    })
};

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usersList => {

        const userListLength = usersList.length;
        const counter = document.getElementById("users");
        counter.innerHTML = userListLength;
});

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(postsList => {

        const postListLength = postsList.length;
        const counter = document.getElementById("posts");
        counter.innerHTML = postListLength;
});

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(commentsList => {

        const commentListLength = commentsList.length;
        const counter = document.getElementById("comments");
        counter.innerHTML = commentListLength;
});

fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(albumsList => {

        const albumListLength = albumsList.length;
        const counter = document.getElementById("albums");
        counter.innerHTML = albumListLength;
});

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(photosList => {

        const photoListLength = photosList.length;
        const counter = document.getElementById("photos");
        counter.innerHTML = photoListLength;
});

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todosList => {

        const todoListLength = todosList.length;
        const counter = document.getElementById("todos");
        counter.innerHTML = todoListLength;
});
