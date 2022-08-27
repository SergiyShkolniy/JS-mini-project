const postDetails = document.getElementsByClassName("user-details")[0];

// const wrapper = document.createElement("div");
// wrapper.style.width = "100%";
// wrapper.style.margin = "0 auto";
// wrapper.style.display = "flex";
// wrapper.style.flexDirection = "column";
// wrapper.style.alignItems = "center";
// wrapper.style.marginTop = "10px";
// postDetails.appendChild(wrapper);

// const container = document.createElement("div");
// container.style.width = "90%";
// container.style.padding = "10px 20px";
// container.style.borderRadius = "5px";
// container.style.boxShadow = "1px 1px 2x grey";
// container.style.background = "#519bcf";
// container.style.color = "#ffffff";
// container.style.zIndex = "2";
// wrapper.appendChild(container);

const userComments = document.createElement("div");
userComments.style.width = "110%";
userComments.style.display = "flex";
userComments.style.justifyContent = "space-around";
userComments.style.flexWrap = "wrap";
userComments.style.boxShadow = "1px 1px 2px grey";
userComments.style.padding = "0 10px";
userComments.style.marginBottom = "10px";
userComments.style.background = "MistyRose";
userComments.style.borderRadius = "0 0 10px 10px";
postDetails.appendChild(userComments);

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(comments => {

        for (const comment of comments) {
            
            const userComment = document.createElement("div");
            userComment.innerHTML = `<b>${comment.postId} : ${comment.id}</b> <br><br>  ${comment.email}<br><b>${comment.name}</b><br><br>${comment.body}`
            userComment.style.padding = "10px";
            userComment.style.margin = "20px 5px";
            userComment.style.width = "19%";
            userComment.style.textAlign = "justify";
            userComment.style.overflow = "hidden";
            userComment.style.wordBreak = "break-all";
            userComment.style.borderRadius = "0 15px 15px 15px";
            userComment.style.boxShadow = "1px 1px 2px grey";
            userComment.style.background = "white";
            userComments.appendChild(userComment);
            
        }
    });