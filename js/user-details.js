const user = JSON.parse(localStorage.getItem("user"));

const userDetails = document.getElementsByClassName("user-details")[0];


const container = document.createElement("div");
container.style.width = "55%";
container.style.padding = "10px 20px";
container.style.position = "relative";
container.style.borderRadius = "10px";
container.style.boxShadow = "1px 1px 2px grey";
container.style.background = "#ffffff";
userDetails.appendChild(container);

const avatar = document.createElement("img");
avatar.src = "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg";
avatar.style.position = "absolute";
avatar.style.maxWidth = "25%";
avatar.style.right = "25px";
avatar.style.top = "25px";
avatar.style.borderRadius = "10px";
container.appendChild(avatar);

for (const userKey in user) {

    if (typeof user[userKey] !== "object") {
        let item = document.createElement("div");
        item.classList.add(`${userKey}`);
        item.innerHTML = `${userKey}: <b>${user[userKey]}</b>`;
        item.style.fontSize = "14px";
        item.style.letterSpacing = "1.2px";
        item.style.paddingLeft = "10px";
        container.appendChild(item);

    } else {
        let itemObject = document.createElement("div");
        itemObject.classList.add(`${userKey}`);
        itemObject.innerText = `${userKey}:`;
        itemObject.style.fontSize = "14px";
        itemObject.style.letterSpacing = "1.2px";
        itemObject.style.paddingLeft = "10px";
        container.appendChild(itemObject);

        for (const keyObject in user[userKey]) {
            if (typeof user[userKey][keyObject] !== "object") {
                let item2 = document.createElement("div");
                item2.classList.add(`${keyObject}`);
                item2.innerHTML = `${keyObject}: <b>${user[userKey][keyObject]}</b>`;
                item2.style.paddingLeft = "30px";
                itemObject.appendChild(item2);

            } else {
                let itemObject2 = document.createElement("div");
                itemObject2.classList.add(`${keyObject}`);
                itemObject2.innerText = `${keyObject}:`
                itemObject2.style.paddingLeft = "50px";
                itemObject.appendChild(itemObject2);

                for (const keyObject2 in user[userKey][keyObject]) {
                    if (typeof user[userKey][keyObject][keyObject2] !== "object") {
                        let item3 = document.createElement("div");
                        item3.classList.add(`${keyObject2}`);
                        item3.innerHTML = `${keyObject2}: <b>${user[userKey][keyObject][keyObject2]}</b>`;
                        item3.style.paddingLeft = "20px";
                        item3.style.paddingBottom = "5px";
                        itemObject2.appendChild(item3);

                    } else {
                        let itemObject3 = document.createElement("div");
                        itemObject3.classList.add(`${keyObject2}`);
                        itemObject3.innerText = `${keyObject2}:`
                        itemObject3.style.paddingLeft = "50px"
                        itemObject2.appendChild(itemObject3);

                    }
                }
            }
        }
    }
}


const userButton = document.createElement("button");
userButton.innerHTML = `posts of <b>"${user.name}"</b>`;
userButton.style.fontSize = "16px";
userButton.style.cursor = "pointer";
userButton.style.minWidth = "90%";
userButton.style.marginTop = "20px";
userButton.style.padding = "10px";
userButton.style.borderRadius = "5px";
userButton.style.boxShadow = "1px 1px 2px grey";
userButton.style.border = "none";
userButton.style.backgroundColor = "#519bcf";
userButton.style.color = "#ffffff";
userButton.style.zIndex = "10";
userDetails.appendChild(userButton);


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

            if (user.id == post.userId) {

                const userWrap = document.createElement("div");
                userWrap.style.display = "none";
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
                userPost.innerHTML = `<b>${post.userId}:${post.id}</b> <br>${post.title}`
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

                userButton.addEventListener("click", togglePosts);

                function togglePosts() {
                    if (userWrap.style.display === "none") {
                        userWrap.style.display = "flex";
                    } else {
                        userWrap.style.display = "none";
                    }
                }

                postButton.onclick = function(event) {
                    event.preventDefault();

                    window.open("post-details.html", "_self");
                    localStorage.setItem("post", JSON.stringify(post));
                }
            }
        }
    });