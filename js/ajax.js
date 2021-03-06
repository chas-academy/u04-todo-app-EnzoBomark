function loadData(value, id, type) { // Ajax function to update tasks

    const request = new XMLHttpRequest(); //Create xhr object
    request.open('POST', 'includes/updatedata.inc.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    let data = '' +
        'value=' + window.encodeURIComponent(value) +
        '&id=' + window.encodeURIComponent(id) +
        '&type=' + window.encodeURIComponent(type);

    request.send(data);
}

function sendData(title, body, dueDate, color) { // Ajax function to Create tasks

    const request = new XMLHttpRequest(); //Create xhr object
    request.open('POST', 'includes/insert.inc.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    let data = '' +
        'title=' + window.encodeURIComponent(title) +
        '&body=' + window.encodeURIComponent(body) +
        '&dueDate=' + window.encodeURIComponent(dueDate) +
        '&color=' + window.encodeURIComponent(color);

    request.send(data);
}

function deleteData(id) { // Ajax function to delete tasks

    const request = new XMLHttpRequest(); //Create xhr object
    request.open('POST', 'includes/deletedata.inc.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    let data = '' + '&listsId=' + window.encodeURIComponent(id);

    request.send(data);
}