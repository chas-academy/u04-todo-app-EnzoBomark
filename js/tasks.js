//#region [SHOW CURRENT DATE]
var now = new Date();

var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

var thisMonths = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

var thisDate = ((now.getDate() < 10) ? "0" : "") + now.getDate();

document.getElementById("date").innerHTML = thisDate;
document.getElementById("month").innerHTML = thisMonths[now.getMonth()];
document.getElementById("weekday").innerHTML = days[now.getDay()];

//#endregion

//#region [ACCORDIAN FOR TASK]
function collapse(list) {
    let section = document.getElementById(list.classList[0]);

    if (section.getAttribute('data-collapsed') === 'false') {
        expandSection(section);
        section.setAttribute('data-collapsed', 'true');
        list.innerHTML = '<img src="img/chevron-up-outline.svg" alt="up">';

    } else {
        collapseSection(section);
        section.setAttribute('data-collapsed', 'false');
        list.innerHTML = '<img src="img/chevron-down-outline.svg" alt="down">';
    }

    loadData(section.getAttribute('data-collapsed'), list.classList[0], 'listsCollapsed');
}

function collapseSection(element) {
    let sectionHeight = element.scrollHeight;
    let elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(function () {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;

        requestAnimationFrame(function () {
            element.style.height = 0 + 'px';
        });
    });
}

function expandSection(element) {
    let sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';
    element.addEventListener('transitionend', function (e) {

        element.removeEventListener('transitionend', arguments.callee);
        element.style.height = 'auto';
    });
}

// Onload

data = document.querySelectorAll('.listsCollapsed');

for (let i = 0; i < data.length; i++) {
    let isCollapsed = data[i].getAttribute('data-collapsed') === 'true';

    if (isCollapsed) {
        data[i].style.height = 'auto';
    }
}

//#endregion

//#region [MARK TASK AS DONE]
function checkedValue(checkbox) {
    label = document.querySelector(`label[for="${checkbox.id}"]`);
    header = document.getElementsByClassName(`${checkbox.classList[0]} listsTitle wrapper-content`);
    collapseLink = document.getElementsByClassName(`${checkbox.classList[0]} collapse-link`);
    list = document.getElementById(checkbox.classList[0]);

    if (checkbox.checked) {
        label.innerHTML = '<img src="img/checkmark-outline.svg" alt="checkbox-checked">';
        checkedStyle(header[0], collapseLink[0]);
        if (list.getAttribute('data-collapsed') === 'true') {

            list.setAttribute('data-collapsed', 'true');
            collapse(checkbox);
            arrow = document.getElementsByClassName(`${checkbox.classList[0]} collapse-link`);
            arrow[0].innerHTML = '<img src="img/chevron-down-outline.svg" alt="down">';
        }

    } else {
        label.innerHTML = '<img src="img/ellipse-outline.svg" alt="checkbox-empty">';
        notCheckedStyle(header[0], collapseLink[0]);
    }
}

function checkedStyle(header, collapseLink) {
    header.style.color = 'lightgray';
    header.style.textDecoration = 'line-through';
    header.style.textDecorationThickness = '2px';
    header.style.textDecorationColor = 'black';
    collapseLink.style.display = 'none';
    header.setAttribute("contenteditable", false);
}

function notCheckedStyle(header, collapseLink) {
    header.style.color = 'black';
    header.style.textDecoration = 'none';
    collapseLink.style.display = 'block';
    header.setAttribute("contenteditable", true);
}

//Select all
document.querySelector("#select-all").addEventListener("click", () => {

    let checkbox = document.getElementsByClassName("listsCompleted wrapper-content");

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == false) {
            checkbox[i].checked = true;
            checkedValue(checkbox[i]);
            loadData(checkbox[i].checked, checkbox[i].classList[0], "listsCompleted");
        }
    }
});


// Onload
checkboxOnload = document.getElementsByClassName('listsCompleted wrapper-content');
headerOnload = document.getElementsByClassName('listsTitle wrapper-content');
collapseLinkOnload = document.getElementsByClassName('collapse-link');

for (let i = 0; i < checkboxOnload.length; i++) {

    if (checkboxOnload[i].checked) {
        checkedStyle(headerOnload[i], collapseLinkOnload[i]);
    } else {
        notCheckedStyle(headerOnload[i], collapseLinkOnload[i]);
    }
}

//#endregion

//#region [DELETE TASK]
function deleteTasks(task) {

    if (confirm("are you sure you want to delete this task")) {
        deleteData(task.classList[0]);

        setTimeout(function () {
            location.reload();
        }, 50);
    }
}


// Delete selected tasks
document.querySelector("#delete-selected").addEventListener("click", () => {

    let checkbox = document.getElementsByClassName("listsCompleted wrapper-content");

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            deleteData(checkbox[i].classList[0])
        }
    }

    setTimeout(function () {
        location.reload();
    }, 50);
});

//#endregion

//#region [UPDATE TASK]
let table = document.getElementById('list-table');
let cells = table.querySelectorAll('.wrapper-content');

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function () {
        let id = cells[i].classList[0];
        let type = cells[i].classList[1];

        if (cells[i].classList[1] == 'listsTitle') {
            let originalValue = this.innerHTML;

            this.onblur = function () {
                if (originalValue !== this.innerHTML) {
                    loadData(this.innerHTML, id, type);
                } else {
                    return this.innerHTML = originalValue;
                }
            }

        } else if (cells[i].classList[1] == 'listsBody') {

            let originalValue = this.innerHTML;

            this.onblur = function () {
                if (originalValue !== this.innerHTML) {
                    loadData(this.innerHTML, id, type);
                }
            }

        } else if (cells[i].classList[1] == 'listsCompleted') {

            loadData(cells[i].checked, id, type);

        }
    }
}

//#region [CHANGE COLOR]
let editColor = document.getElementsByClassName("edit-color");

document.getElementById("settings-icon").addEventListener("click", () => {

    if (localStorage.getItem("settings") == "open") {
        localStorage.setItem("settings", "close");
        listsHeaderStyle("block", "10% 90% 5%", "none");
        location.reload();
    } else {
        localStorage.setItem("settings", "open");
        listsHeaderStyle("none", "10% 10% 90%", "block");
    }
});

function listsHeaderStyle(displayOne, grid, displayTwo) {
    let collapseLink = document.getElementsByClassName("collapse-link");
    let listsHeader = document.getElementsByClassName("list-header");
    let editColor = document.getElementsByClassName("edit-color");
    let deleteTask = document.getElementsByClassName("delete-task");
    let listsCompleted = document.getElementsByClassName("listsCompleted");
    let checkBox = document.getElementsByClassName("checkbox");

    for (let i = 0; i < listsHeader.length; i++) {
        checkBox[i].style.display = displayOne;
        listsHeader[i].style.gridTemplateColumns = grid;
        deleteTask[i].style.display = displayTwo;
        editColor[i].style.display = displayTwo;
        collapseLink[i].style.display = "none";

        if (displayOne == "none") {
            if (document.getElementById(collapseLink[i].classList[0]).getAttribute('data-collapsed') === 'true') {
                document.getElementById(collapseLink[i].classList[0]).setAttribute('data-collapsed', 'true');
                collapse(collapseLink[i]);
            }

        } else {
            if (listsCompleted[i].checked == false) collapseLink[i].style.display = "block";
        }
    }
}

function editColors(color) {

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    while (randomColor == color.style.backgroundColor) {
        randomColor = 'rgb(248, 248, 248)'
    }
    color.style.backgroundColor = randomColor;

    loadData(randomColor, color.classList[0], "listsColor");
}

// Onload

if (localStorage.getItem("settings") == "open") {
    listsHeaderStyle("none", "10% 10% 90%", "block");
} else {
    listsHeaderStyle("block", "10% 90% 5%", "none");
}

for (let i = 0; i < editColor.length; i++) {

    if (editColor[i].dataset.color != "") {
        editColor[i].style.backgroundColor = editColor[i].dataset.color;
    } else {
        editColor[i].style.backgroundColor = "rgb(248, 248, 248)";
    }
}
//#endregion

//#endregion