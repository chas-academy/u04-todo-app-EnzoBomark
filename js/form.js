//#region [CALENDAR IN THE FORM]
const date = new Date();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let dateWindow = document.getElementById("input-due-date");

// Create calander
const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");
    // Set last day of the month
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // Set last day of the previous month
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    // Set number of days before
    const firstDayIndex = date.getDay();
    // Set number of days after (max 6)
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    // Set month
    document.querySelector(".date h2").innerHTML = months[date.getMonth()];

    let days = "";

    // Set days before
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    // Set current days
    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            // Set today
            days += `<div onclick="setDate(this)" class="today">${i}</div>`;
        } else {
            days += `<div onclick="setDate(this)" >${i}</div>`;
        }
    }

    // Set comming days
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

// Change to previous month and render new calander
document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

// Change to next month and render new calander
document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

// Show date in date window
function setDate(thisDate) {
    dueDate = `${date.getFullYear()}-${date.getMonth() + 1}-${thisDate.textContent}`;
    dateWindow.value = dueDate;
}

// Press the date window to remove the selected date
document.querySelector("#input-due-date").addEventListener("click", () => {
    dateWindow.value = null;
});
//#endregion

//#region [BODY COLOR IN THE FORM]
const colors = [
    'rgb(200, 213, 255)',
    'rgb(200, 255, 244)',
    'rgb(255, 200, 200)',
    'rgb(248, 200, 255)',
    'rgb(255, 237, 200)',
    'rgb(214, 255, 200)'
];

// Add color to task body
document.querySelector("#body-color").addEventListener("click", () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    while (randomColor == document.getElementById("body-color").style.backgroundColor) {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    }
    document.getElementById("body-color").style.backgroundColor = randomColor;
});

function setColorToBody() {
    let body = document.getElementsByClassName("listsBody wrapper-content");

    for (let i = 0; i < body.length; i++) {

        if (body[i].dataset.color != "") {
            body[i].style.backgroundColor = body[i].dataset.color;
        } else {
            body[i].style.backgroundColor = "rgb(248, 248, 248)";
        }
    }
}
//#endregion

//#region [DISPLAY FORM]

let addTaskIcon = document.getElementById("add-task-icon");
let formHeight = document.getElementById("form-height");

function expandForm() {
    formHeight.style.height = "420px";
    formHeight.style.marginBottom = "20px";
    addTaskIcon.innerHTML = " <img src='img/remove-outline.svg' alt='remove icon'>";
}

function collapseForm() {
    formHeight.style.height = "0px";
    formHeight.style.marginBottom = "0px";
    addTaskIcon.innerHTML = "<img src='img/add-outline.svg' alt='add icon'>";
}

function displayForm() {
    document.getElementById("form-height").style.transition = "height 0.5s";
    if (localStorage.getItem("form") == "open") {
        localStorage.setItem("form", "close");
        collapseForm()

    } else {
        localStorage.setItem("form", "open");
        expandForm()
    }
}

function displayFormOnLoad() {
    if (localStorage.getItem("form") !== "open") {
        collapseForm()
    } else {
        expandForm()
    }
}
//#endregion

//#region [SUBMIT FORM]
function submitData() {
    let title = document.getElementById("input-title");
    let body = document.getElementById("input-body");
    let dueDate = document.getElementById("input-due-date");
    let color = document.getElementById("body-color").style.backgroundColor;

    // If no input given 
    if (title.value === '') {
        title.placeholder = "No input Given";
        title.style.backgroundColor = "#FFF2F2";
    } else { // If input given 
        // Send data to database
        sendData(title.value, body.innerHTML, dueDate.value, color)
        location.reload();
    }
}
//#endregion

renderCalendar();
setColorToBody();
displayFormOnLoad();