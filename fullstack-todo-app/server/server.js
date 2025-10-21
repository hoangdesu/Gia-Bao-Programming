import express from 'express';
import cors from 'cors';
import fs, { stat } from 'fs';

const app = express();

const PORT = 7891;


import sqlite3 from 'sqlite3';
sqlite3.verbose();

const DB_FILE = './data/todo-app.db';
const db = new sqlite3.Database(DB_FILE);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// let todos = ['setup react frontend', 'create express server', 'setup a db'];

const todosFile = fs.readFileSync('./data/todos.json', 'utf-8');
console.log(todosFile);

let todos = JSON.parse(todosFile);
console.log(todos);


app.get('/todos', (req, res) => {
    
    const todosDb = [];

    db.serialize(() => {

        db.each("SELECT * FROM todos ORDER BY created_at DESC", (err, row) => {
            if (row) {
                console.log('row:', row);
                todosDb.push(row);
            }
        }, () => {
            return res.json(todosDb);
        });
    });
});


app.post('/todos', (req, res) => {
    // console.log(req.body);
    const { data: newTodo } = req.body;
    // todos.push(newTodo);

    // update the new array back into the file
    // fs.writeFileSync('./data/todos.json', JSON.stringify(todos, null, 4));


    db.serialize(() => {
        const query = 'INSERT INTO todos (content) VALUES (?)';
        const statement = db.prepare(query);
        statement.run(newTodo);

        const todosDb = [];

        db.each("SELECT * FROM todos ORDER BY created_at DESC", (err, row) => {
            if (row) {
                console.log('row:', row);
                todosDb.push(row.content);
            }
        }, () => {
            return res.json(todosDb);
        });

        
        res.statusCode(201).send('OK');

    })

    // return res.json(todos);
});



app.delete('/todos', (req, res) => {
    const { todo_toRemove: rmTodo } = req.body;

    console.log('removing...', rmTodo);

    // mutable vs immutable 
    todos = todos.filter((todo) => todo !== rmTodo);

    // console.log('new todos:', todos);

    fs.writeFileSync('./data/todos.json', JSON.stringify(todos, null, 4));

    return res.sendStatus(201);
    // return res.json(todos);
});


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
