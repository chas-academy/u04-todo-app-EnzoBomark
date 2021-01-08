# u04-todo-app-EnzoBomark
u04-todo-app-EnzoBomark created by GitHub Classroom

## Installation

SQL Commands


```sql
CREATE DATABASE devtest;

CREATE TABLE lists (
	listsID int(11) PRIMARY KEY AUTO INCREMENT NOT NULL,
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
	usersId int(11) PRIMARY KEY AUTO INCREMENT NOT NULL,
	usersFullname varchar(128) NOT NULL,
        usersEmail varchar(128) NOT NULL,
	usersPassword varchar(128) NOT NULL,
);
```

## Usage


