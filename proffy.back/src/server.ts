import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        {name: "ale", age: 21},
        {name: "vini", age: 25}
    ]);
});

app.listen(3333);