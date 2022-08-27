const post = JSON.parse(localStorage.getItem("post"));

console.log(post);

const postDetails = document.getElementsByClassName("post-details")[0];

const wrapper = document.createElement("div");
wrapper.style.width = "1200px";
wrapper.style.margin = "0 auto";
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";
wrapper.style.marginTop = "10px";
postDetails.appendChild(wrapper);

const container = document.createElement("div");
container.style.width = "90%";
container.style.padding = "10px 20px";
container.style.borderRadius = "5px";
container.style.boxShadow = "1px 1px 2x grey";
container.style.background = "#519bcf";
container.style.color = "#ffffff";
container.style.zIndex = "2";
wrapper.appendChild(container);

const userComments = document.createElement("div");
userComments.style.maxWidth = "85%";
userComments.style.display = "flex";
userComments.style.flexWrap = "wrap";
userComments.style.boxShadow = "1px 1px 2px grey";
userComments.style.padding = "20px 10px";
userComments.style.marginBottom = "10px";
userComments.style.background = "MistyRose";
userComments.style.borderRadius = "0 0 10px 10px";
wrapper.appendChild(userComments);

for (const userKey in post) {

    const item = document.createElement("div");
    item.classList.add(`${userKey}`);
    item.innerHTML = `${userKey}: <b>${post[userKey]}</b>`;
    item.style.paddingLeft = "10px";
    item.style.paddingBottom = "10px";
    container.appendChild(item);

}

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(comments => {

        for (const comment of comments) {

            if (post.id == comment.postId) {
                const userComment = document.createElement("div");
                userComment.innerHTML = `<b>${comment.postId} : ${comment.id}</b> <br><br>  ${comment.email}<br><b>${comment.name}</b><br><br>${comment.body}`
                userComment.style.padding = "10px";
                userComment.style.margin = "10px";
                userComment.style.maxWidth = "23%";
                userComment.style.textAlign = "justify";
                userComment.style.overflow = "hidden";
                userComment.style.wordBreak = "break-all";
                userComment.style.borderRadius = "0 15px 15px 15px";
                userComment.style.boxShadow = "1px 1px 2px grey";
                userComment.style.background = "white";
                userComments.appendChild(userComment);
            }
        }
    });