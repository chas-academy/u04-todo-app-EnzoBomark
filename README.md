# u04-todo-app-EnzoBomark
u04-todo-app-EnzoBomark created by GitHub Classroom

## Installation

SQL Commands

```sql
CREATE DATABASE devtest;

CREATE TABLE lists (
	listsID int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	listsCreatorId int(11) NOT NULL,
        listsTitle varchar(128) NOT NULL,
	listsBody varchar(4096) NOT NULL,
	listsDate date NOT NULL DEFAULT current_timestamp(),
	listsDueDate varchar(11) NOT NULL DEFAULT 'Not Set',
	listsCompleted bit(1) NOT NULL DEFAULT 0,
	listsCollapsed bit(1) NOT NULL,
	listsColor varchar(20)
);

CREATE TABLE users (
	usersId int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
	usersFullname varchar(128) NOT NULL,
	usersUsername varchar(128) NOT NULL,
        usersEmail varchar(128) NOT NULL,
	usersPassword varchar(128) NOT NULL
);
```

## Project solves 

JavaScript is a client-side scripting language,
whereas PHP is a server-side scripting language. 

Simply speaking, JavaScript is the language of the front-end, 
whereas PHP is the language of the back-end.
The problem comes when trying to communicate with a server and client side language.

##### Heres where Ajax comes in.
AJAX is a developer's dream, because you can:

Update a web page without reloading the page
Request data from a server - after the page has loaded
Receive data from a server - after the page has loaded
Send data to a server - in the background.
### Code example

Simple Ajax with vanilla JavaScript and php

```JavaScript
function loadData(value, id, type) { // Ajax function to update tasks

    const request = new XMLHttpRequest(); // Create xhr object
    request.open('POST', 'includes/updatedata.inc.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    let data = '' +
        'value=' + window.encodeURIComponent(value) +
        '&id=' + window.encodeURIComponent(id) +
        '&type=' + window.encodeURIComponent(type);

    request.send(data);
}
```

```php
<?php 
include_once 'autoloader.inc.php';

if(isset($_POST['value'], $_POST['id'], $_POST['type'])){
    $listsValue = $_POST['value'];
    $listsId = $_POST['id'];
    $listsType = $_POST['type'];

    $updateText = new UpdateList();
    $updateText->updateValues($listsId, $listsType, $listsValue);
}

```

## Icons 

[IONICONS](https://ionicons.com/)



