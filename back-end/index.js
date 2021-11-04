const express = require('express');
const { getTask } = require('./controller/controllerTask');

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/tasks', getTask);

app.listen(PORT, () => console.log(`Servirdor rodando na porta: ${PORT}`));