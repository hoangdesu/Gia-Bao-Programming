import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 7891;

app.use(cors());

const todos = ['setup react frontend', 'create express server', 'setup a db'];
app.get('/todos', (req, res) => {
    res.json(todos);
});

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
