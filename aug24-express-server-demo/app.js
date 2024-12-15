const express = require('express');

const app = express();
const PORT = 3001;

// root route
app.get('/', (req, res) => {
    res.send('hey there welcome to my simple website :D!');
});

app.get('/hi', (req, res) => {
    res.json({ message: 'hi there :D', status: 200 });
});

app.get('/hi/:name', (req, res) => {
    // console.log(req.params);
    const { name } = req.params;

    const newName = name[0].toUpperCase() + name.slice(1);

    res.send(`Hello ${newName}`);
});

app.listen(PORT, () => {
    console.log(`🚀 App running at http://localhost:${PORT}`);
});
