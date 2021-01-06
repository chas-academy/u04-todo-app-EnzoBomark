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

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];


    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div onclick="setDate(this)" class="today">${i}</div>`;
        } else {
            days += `<div onclick="setDate(this)" >${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

document.querySelector("#input-due-date").addEventListener("click", () => {
    dateWindow.value = null;
});

document.querySelector("#body-color").addEventListener("click", () => {

    const colors = [
        'rgb(200, 213, 255)',
        'rgb(200, 255, 244)',
        'rgb(255, 200, 200)',
        'rgb(248, 200, 255)',
        'rgb(255, 237, 200)',
        'rgb(214, 255, 200)'
    ];

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

function setDate(thisDate) {
    dueDate = `${date.getFullYear()}-${date.getMonth() + 1}-${thisDate.textContent}`;
    dateWindow.value = dueDate;
}

function submitData() {
    let title = document.getElementById("input-title");
    let body = document.getElementById("input-body");
    let dueDate = document.getElementById("input-due-date");
    let color = document.getElementById("body-color").style.backgroundColor;

    if (title.value === '') {
        title.placeholder = "No input Given";
        title.style.backgroundColor = "#FFF2F2";
    } else {
        sendData(title.value, body.value, dueDate.value, color)
        location.reload();
    }
}

function displayForm() {
    document.getElementById("form-height").style.transition = "max-height 0.5s";

    if (localStorage.getItem("form") == "open") {
        localStorage.setItem("form", "close");
        document.getElementById("form-height").style.maxHeight = "0px";
        document.getElementById("add-task-icon").innerHTML = "<img src='img/add-outline.svg' alt='add icon'>";

    } else {
        localStorage.setItem("form", "open");
        document.getElementById("form-height").style.maxHeight = "340px";
        document.getElementById("add-task-icon").innerHTML = " <img src='img/remove-outline.svg' alt='remove icon'>";
    }
}

function sendData(title, body, dueDate, color) {

    const request = new XMLHttpRequest(); //Create xhr object
    request.open('POST', 'includes/insert.inc.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    request.onload = function () {
        if (this.status == 200) {
            //console.log(this.responseText);
        }
    }

    let data = '' +
        'title=' + window.encodeURIComponent(title) +
        '&body=' + window.encodeURIComponent(body) +
        '&dueDate=' + window.encodeURIComponent(dueDate) +
        '&color=' + window.encodeURIComponent(color);


    request.send(data);
}

renderCalendar();
setColorToBody();

if (localStorage.getItem("form") == "open") {
    document.getElementById("add-task-icon").innerHTML = " <img src='img/remove-outline.svg' alt='remove icon'>";
    document.getElementById("form-height").style.maxHeight = "340px";
} else {
    document.getElementById("add-task-icon").innerHTML = "<img src='img/add-outline.svg' alt='add icon'>";
    document.getElementById("form-height").style.maxHeight = "0px";
}