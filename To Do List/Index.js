const title = document.getElementById("title");
const desc = document.getElementById("desc");
const todo = document.getElementById("todo");
const addBtn = document.getElementById("addbtn");
const updateBtn = document.getElementById("updatebtn");

let currentItem = null; 

function addbtn() {
    if (title.value.trim() === "" || desc.value.trim() === "") {
        alert("Please enter both title and description.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span style="color:navy;">
            Title is: <u style="color:darkred;"><b>${title.value}</b></u> and 
            Description is: <u style="color:darkred;"><b>${desc.value}</b></u>
        </span>
        <button class="btn btn-outline-info mx-2 my-2" onclick="editItem(this)">Edit</button>
        <button class="btn btn-outline-danger mx-2 my-2" onclick="removeItem(this)">Remove</button>
    `;

    todo.appendChild(li);

    title.value = "";
    desc.value = "";
}

function editItem(button) {
    currentItem = button.parentElement;
    const span = currentItem.querySelector("span").innerText;

    const [titleText, descText] = span
        .replace("Title is: ", "")
        .replace("Description is: ", "")
        .split(" and ");

    title.value = titleText.trim();
    desc.value = descText.trim();

    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");
}

function updateItem() {
    if (!currentItem) return;

    const span = currentItem.querySelector("span");
    span.innerHTML = `Title is: <u style="color:darkred;"><b>${title.value}</b></u> and 
                      Description is: <u style="color:darkred;"><b>${desc.value}</b></u>`;

    title.value = "";
    desc.value = "";
    currentItem = null;

    addBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
}

function removeItem(button) {
    button.parentElement.remove();
}

function removebtnfirst() {
    const first = document.querySelector("li:first-child");
    if (first) {
        first.remove();
    } 
    else {
        alert("There is no record exists....!");
    }
}

function removebtnlast() {
    const last = document.querySelector("li:last-child");
    if (last) {
        last.remove();
    } 
    else {
        alert("There is no record exists....!");
    }
}

function removebtnAll() {
    if (todo.firstChild) {
        todo.innerHTML = "";
    } 
    else {
        alert("There is no record exists....!");
    }
}
