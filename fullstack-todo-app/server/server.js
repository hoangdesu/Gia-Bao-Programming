import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 7891;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todos = ['setup react frontend', 'create express server', 'setup a db'];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    // console.log(req.body);
    const { data: newTodo } = req.body;
    todos.push(newTodo);
    return res.json(todos);
});

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
