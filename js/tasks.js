//#region [SHOW CURRENT DATE]
var now = new Date(); // Create date

var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

var thisMonths = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

var thisDate = ((now.getDate() < 10) ? "0" : "") + now.getDate(); // If date is sub 10 add 0 before

// Display all values
document.getElementById("date").innerHTML = thisDate;
document.getElementById("month").innerHTML = thisMonths[now.getMonth()];
document.getElementById("weekday").innerHTML = days[now.getDay()];

//#endregion

//#region [ACCORDIAN FOR TASK]
function collapse(task) { // Collapse "this" task
    let section = document.getElementById(task.classList[0]); // Get element by the elements database id

    // Expand accordian
    if (section.getAttribute('data-collapsed') === 'false') {
        expandSection(section);
        section.setAttribute('data-collapsed', 'true');
        task.innerHTML = '<img src="img/chevron-up-outline.svg" alt="up">';

    } else { // Collapse accordian
        collapseSection(section);
        section.setAttribute('data-collapsed', 'false');
        task.innerHTML = '<img src="img/chevron-down-outline.svg" alt="down">';
    }

    // Send data to database
    loadData(section.getAttribute('data-collapsed'), task.classList[0], 'listsCollapsed');
}

function collapseSection(element) {
    // Get height of the element's inner content
    let sectionHeight = element.scrollHeight;
    // briefly deactivate all transitions
    let elementTransition = element.style.transition;
    element.style.transition = '';

    // as soon as the previous style change has taken effect	
    // set the element's height to its current pixel height
    requestAnimationFrame(function () {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;

        // as soon as the previous style change has taken effect
        // transition element to height: 0px
        requestAnimationFrame(function () {
            element.style.height = 0 + 'px';
        });
    });
}

function expandSection(element) {
    // Get height of the element's inner content
    let sectionHeight = element.scrollHeight;
    // transition element to the height of inner content
    element.style.height = sectionHeight + 'px';

    // run when transition finishes 
    element.addEventListener('transitionend', function (e) {
        // remove event listener so it only triggeres once
        element.removeEventListener('transitionend', arguments.callee);
        element.style.height = 'auto';
    });
}

// Onload


data = document.querySelectorAll('.listsCollapsed');

// Check all elements for collapsed value
for (let i = 0; i < data.length; i++) {
    // isCollapsed will set true or false based on attribute value
    let isCollapsed = data[i].getAttribute('data-collapsed') === 'true';

    if (isCollapsed) { // If isCollapsed is true, set height to auto
        data[i].style.height = 'auto';
    }
}

//#endregion

//#region [MARK TASK AS DONE]
function checkedValue(checkbox) {
    // Get elements based on database id
    label = document.querySelector(`label[for="${checkbox.id}"]`);
    header = document.getElementsByClassName(`${checkbox.classList[0]} listsTitle wrapper-content`);
    collapseLink = document.getElementsByClassName(`${checkbox.classList[0]} collapse-link`);
    list = document.getElementById(checkbox.classList[0]);

    if (checkbox.checked) {
        // change icon to checked
        label.innerHTML = '<img src="img/checkmark-outline.svg" alt="checkbox-checked">';
        // Apply strike style to text and remove collapse link
        checkedStyle(header[0], collapseLink[0]);

        // If element is expanded, collapse the element
        if (list.getAttribute('data-collapsed') === 'true') {

            list.setAttribute('data-collapsed', 'true');
            collapse(checkbox);
            arrow = document.getElementsByClassName(`${checkbox.classList[0]} collapse-link`);
            arrow[0].innerHTML = '<img src="img/chevron-down-outline.svg" alt="down">';
        }
    } else {
        // change icon to circle
        label.innerHTML = '<img src="img/ellipse-outline.svg" alt="checkbox-empty">';
        // Remove strike from text and add a collapse link
        notCheckedStyle(header[0], collapseLink[0]);
    }
}

// Apply style changes for checked
function checkedStyle(header, collapseLink) {
    header.style.color = 'lightgray';
    header.style.textDecoration = 'line-through';
    header.style.textDecorationThickness = '2px';
    header.style.textDecorationColor = 'black';
    collapseLink.style.display = 'none';
    header.setAttribute("contenteditable", false);
}

// Apply style changes when not checked
function notCheckedStyle(header, collapseLink) {
    header.style.color = 'black';
    header.style.textDecoration = 'none';
    collapseLink.style.display = 'block';
    header.setAttribute("contenteditable", true);
}

//Select all
document.querySelector("#select-all").addEventListener("click", () => {

    // Get all checkboxes
    let checkbox = document.getElementsByClassName("listsCompleted wrapper-content");

    for (let i = 0; i < checkbox.length; i++) {

        // If checkbox value is false, change it to true
        if (checkbox[i].checked == false) {
            checkbox[i].checked = true;
            // Apply styling
            checkedValue(checkbox[i]);
            // Send data to database
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
        // Delete data from database
        deleteData(task.classList[0]);

        setTimeout(function () {
            // Reload to update page
            location.reload();
        }, 50);
    }
}

// Delete selected tasks
document.querySelector("#delete-selected").addEventListener("click", () => {

    let checkbox = document.getElementsByClassName("listsCompleted wrapper-content");

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            // Delete all checked elemnts form database
            deleteData(checkbox[i].classList[0])
        }
    }

    setTimeout(function () {
        // Reload to update page
        location.reload();
    }, 50);
});

//#endregion

//#region [UPDATE TASK]
let table = document.getElementById('list-table');
// Get every element with class "wrapper-content" in table
let cells = table.querySelectorAll('.wrapper-content');

for (let i = 0; i < cells.length; i++) {
    // for each cell add a click event
    cells[i].onclick = function () {
        // Get id and type form class list
        let id = cells[i].classList[0];
        let type = cells[i].classList[1];

        // if type is equal to listsTitle send data to database when exiting field
        if (cells[i].classList[1] == 'listsTitle') {
            let originalValue = this.innerHTML;

            this.onblur = function () {
                if (originalValue !== this.innerHTML) {
                    loadData(this.innerHTML, id, type);
                } else {
                    return this.innerHTML = originalValue;
                }
            }

            // if type is equal to listsBody send data to database when exiting field
        } else if (cells[i].classList[1] == 'listsBody') {

            let originalValue = this.innerHTML;

            this.onblur = function () {
                if (originalValue !== this.innerHTML) {
                    loadData(this.innerHTML, id, type);
                }
            }

            // if type is equal to listsCompleted send data to database when exiting field
        } else if (cells[i].classList[1] == 'listsCompleted') {

            loadData(cells[i].checked, id, type);

        }
    }
}

//#region [SETTINGS MODE]
let editColor = document.getElementsByClassName("edit-color");

// Add click event to setitngs icon
document.getElementById("settings-icon").addEventListener("click", () => {

    // Switch between Settings and normal list mode
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

    // Change styling to all elements
    for (let i = 0; i < listsHeader.length; i++) {
        checkBox[i].style.display = displayOne;
        listsHeader[i].style.gridTemplateColumns = grid;
        deleteTask[i].style.display = displayTwo;
        editColor[i].style.display = displayTwo;
        collapseLink[i].style.display = "none";

        // Collapse all open elements
        if (displayOne == "none") { // if entering Settings
            if (document.getElementById(collapseLink[i].classList[0]).getAttribute('data-collapsed') === 'true') {
                document.getElementById(collapseLink[i].classList[0]).setAttribute('data-collapsed', 'true');
                collapse(collapseLink[i]);
            }

        } else { // if exiting Settings
            // Add collapse link if checked
            if (listsCompleted[i].checked == false) collapseLink[i].style.display = "block";
        }
    }
}

function editColors(color) {

    // Get a random color
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Remove possibility of duplicate colors
    while (randomColor == color.style.backgroundColor) {
        randomColor = 'rgb(248, 248, 248)'
    }
    color.style.backgroundColor = randomColor;

    // Send data to database
    loadData(randomColor, color.classList[0], "listsColor");
}

// Onload

if (localStorage.getItem("settings") == "open") {
    listsHeaderStyle("none", "10% 10% 90%", "block");
} else {
    listsHeaderStyle("block", "10% 90% 5%", "none");
}

for (let i = 0; i < editColor.length; i++) {

    // Apply color value onload
    if (editColor[i].dataset.color != "") {
        editColor[i].style.backgroundColor = editColor[i].dataset.color;
    } else {
        editColor[i].style.backgroundColor = "rgb(248, 248, 248)";
    }
}
//#endregion

//#endregion