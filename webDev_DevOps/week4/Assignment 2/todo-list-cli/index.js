// index.js
const fs = require('fs');
const path = require('path');
const { program } = require('commander');

// Path to the JSON file where todos will be stored
const TODOS_FILE = path.join(__dirname, 'todos.json');

// Function to load todos from the JSON file
function loadTodos() {
    if (fs.existsSync(TODOS_FILE)) {
        const data = fs.readFileSync(TODOS_FILE, 'utf8');
        return JSON.parse(data);
    }
    return [];
}

// Function to save todos to the JSON file
function saveTodos(todos) {
    fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
}

// Command to add a new todo
program
    .command('add <task>')
    .description('Add a new todo')
    .action((task) => {
        const todos = loadTodos();
        todos.push({ task, done: false });
        saveTodos(todos);
        console.log(`Added todo: "${task}"`);
    });

// Command to delete a todo
program
    .command('delete <index>')
    .description('Delete a todo by its index')
    .action((index) => {
        const todos = loadTodos();
        if (index >= 0 && index < todos.length) {
            const removed = todos.splice(index, 1);
            saveTodos(todos);
            console.log(`Deleted todo: "${removed[0].task}"`);
        } else {
            console.log('Invalid index');
        }
    });

// Command to mark a todo as done
program
    .command('done <index>')
    .description('Mark a todo as done by its index')
    .action((index) => {
        const todos = loadTodos();
        if (index >= 0 && index < todos.length) {
            todos[index].done = true;
            saveTodos(todos);
            console.log(`Marked todo as done: "${todos[index].task}"`);
        } else {
            console.log('Invalid index');
        }
    });

// Command to list all todos
program
    .command('list')
    .description('List all todos')
    .action(() => {
        const todos = loadTodos();
        if (todos.length === 0) {
            console.log('No todos found!');
        } else {
            todos.forEach((todo, index) => {
                console.log(`${index}: [${todo.done ? 'x' : ' '}] ${todo.task}`);
            });
        }
    });

program.parse(process.argv);
