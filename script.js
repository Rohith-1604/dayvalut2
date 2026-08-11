let menuitem = document.querySelectorAll(".menu-item")
let content = document.querySelector(".content")
let overlay = document.querySelector(".overlay")
let btn = document.querySelector(".btn")
let close = document.getElementById("close")
let form = document.getElementById("form")
let nodeList = document.querySelector(".nodeList")


let data = [{
    id: 1,
    title: "js",
    description: "javaScript",
    category: "study",
    status: "done",
    priority: "high",
}, {
    id: 2,
    title: "python",
    description: "python",
    category: "study",
    status: "done",
    priority: "high",
}, {
    id: 3,
    title: "html",
    description: "html",
    category: "study",
    status: "done",
    priority: "high",
}
]

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let notetitle = e.target.title.value;
    let notedescription = e.target.description.value;
    let notecategory = e.target.category.value;
    let notestatus = e.target.status.value;
    let notepriority = e.target.priority.value;

    let note = {
        title: notetitle,
        description: notedescription,
        category: notecategory,
        status: notestatus,
        priority: notepriority
    }

    data.push(note);
    let jsonData = JSON.stringify(data);
    console.log(jsonData);
    localStorage.setItem("notes", jsonData);
    console.log(data);
    userListsRender();
    overlay.style.display = "none";
    e.target.title.value = '';
    e.target.description.value = '';
    e.target.category.value = '';
    e.target.status.value = '';
    e.target.priority.value = '';

})

let answer = localStorage.getItem('users');
console.log(answer);
console.log(JSON.parse(answer));



function userListsRender() {
    nodeList.innerHTML = "";
    data.forEach(item => {
        nodeList.innerHTML += `<div class="nodeCard">
                    <h1 class="title">Title : ${item.title}</h1>
                    <P class="description">Description : ${item.description}</P>
                    <P class="category">Category : ${item.category}</P>
                    <P class="status">Status : ${item.status}</P>
                    <P class="priority">priority : ${item.priority}</P>
                  </div>`
    })

}

userListsRender();
btn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    console.log('clicked');

})
function render(item) {
    content.innerHTML = '';
    let name = item.textContent
    content.innerHTML = `<h1>${name.toUpperCase()}</h1>`

    menuitem.forEach(item => {
        item.classList.remove('active')
    })
    item.classList.add('active')
}
menuitem.forEach(item => {
    item.addEventListener("click", () => render(item))
})

close.addEventListener("click", () => {
    overlay.style.display = 'none';
})



let status = document.querySelector(".Status");
    status.addEventListener("click", () => {
        let statusData = data.map(item =>item.status);
        console.log(statusData);
    });


let priority = document.querySelector(".priority");
    priority.addEventListener("click", () => {
        let priorityData = data.map(item =>item.priority);
        console.log(priorityData);
    });

