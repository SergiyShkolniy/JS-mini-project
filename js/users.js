fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usersList => {

        const content = document.getElementsByClassName("content")[0];

        usersList.forEach(user => {

            const contentContainer = document.createElement("div");
            contentContainer.classList.add("content-container");
            contentContainer.style.margin = "15px 25px";
            contentContainer.style.padding = "10px 20px";
            contentContainer.style.borderRadius = "5px";
            contentContainer.style.boxShadow = "1px 1px 2px grey";
            content.appendChild(contentContainer);

            const containerAvatar = document.createElement("img");
            containerAvatar.src = "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg";
            containerAvatar.style.width = "70px";

            const containerInfo= document.createElement("div");
            containerInfo.innerText = user.name;
            containerInfo.style.fontSize = "16px";
            containerInfo.classList.add("container-info");

            const containerButton = document.createElement("button");
            containerButton.innerText = "viev profile";
            containerButton.style.backgroundColor = "#519bcf";
            containerButton.style.color = "#ffffff";
            containerButton.style.padding = "10px 20px";
            containerButton.style.borderRadius = "5px";
            containerButton.style.border = "none";
            containerButton.style.cursor = "pointer";

            contentContainer.append(containerAvatar, containerInfo, containerButton);

            contentContainer.onmouseover = function() {
                contentContainer.style.backgroundColor = "MistyRose";
                containerInfo.style.fontWeight = "600";
            }    

             contentContainer.onmouseout = function() {
                contentContainer.style.backgroundColor = "#ffffff";
                containerInfo.style.fontWeight = "400";
            }

            containerButton.onclick = function(event) {
                event.preventDefault();

                window.open("user-details.html", "_self");
                localStorage.setItem("user", JSON.stringify(user));
            }

        });
    });