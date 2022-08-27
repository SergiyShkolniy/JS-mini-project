const userDetails = document.getElementsByClassName("user-details")[0];

const userPosts = document.createElement("div");
userPosts.style.width = "100%";
userPosts.style.marginBottom = "20px";
userPosts.style.display = "flex";
userPosts.style.justifyContent = "space-around";
userPosts.style.flexWrap = "wrap";
userPosts.style.background = "MistyRose";
userPosts.style.boxShadow = "1px 1px 2px grey";
userPosts.style.borderRadius = "5px";
userPosts.style.padding = "0 10px";
userDetails.appendChild(userPosts);


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {

        for (let post of posts) {

            const userWrap = document.createElement("div");
            userWrap.style.display = "flex";
            userWrap.style.flexDirection = "column";
            userWrap.style.justifyContent = "space-between";
            userWrap.style.width = "19%";
            userWrap.style.margin = "20px 5px";
            userWrap.style.paddingBottom = "5px";
            userWrap.style.background = "white";
            userWrap.style.borderRadius = " 0 5px 5px 5px";
            userWrap.style.boxShadow = "1px 1px 2px grey";
            userPosts.appendChild(userWrap);

            userWrap.onmouseover = function() {
                userWrap.style.boxShadow = "2px 2px 6px grey";

                userWrap.onmouseout = function() {
                    userWrap.style.boxShadow = "1px 1px 2px grey";
                };
            };

            const userPost = document.createElement("div");
            userPost.innerHTML = `<b>${post.userId}:${post.id}</b> <br><b>Title: </b>${post.title}<br><br><b>Body: </b>${post.body}`
            userPost.style.padding = "20px";
            userPost.style.height = "70%";
            userPost.style.textAlign = "justify";
            userWrap.appendChild(userPost);

            const postButton = document.createElement("button");
            postButton.innerText = "post details";
            postButton.style.margin = "0 auto";
            postButton.style.marginBottom = "10px";
            postButton.style.padding = "5px 30px";
            postButton.style.boxShadow = "1px 1px 2px grey";
            postButton.style.cursor = "pointer";
            postButton.style.border = "none";
            postButton.style.borderRadius = "5px";
            postButton.style.backgroundColor = "#519bcf";
            postButton.style.color = "#ffffff";
            userWrap.appendChild(postButton);

            postButton.onclick = function(event) {
                event.preventDefault();

                window.open("post-details.html", "_self");
                localStorage.setItem("post", JSON.stringify(post));
            } 
        }
    });