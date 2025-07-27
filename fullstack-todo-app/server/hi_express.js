// const express = require('express'); only usable with commonjs

import express from 'express';

const app = express();

const PORT = 7891;

// Router handlers

app.get('/', (request, response) => {
    response.send('sup bro!! server is running')
});

// Query Strings
const menu = ['pho', 'sushi', 'ramen'];
app.get('/menu', (req, res) => {
    // console.log(req.query);

    const { item } = req.query;

    if (!item) {
        return res.json(menu);
    } else {
        if (Number(item) > menu.length - 1) {
            return res.send('Invalid item');
        } else {
            return res.json(menu[Number(item)]);
        }
    }
});

// Path Params
app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    return res.send(`Hello ${name}!`);
});


// 404 handler: MUST be place after all other handlers
app.use((req, res) => {
    return res.status(404).send('404 NOT FOUND!!!');
});


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});

