const express = require('express');
const { registerUser, loginUser, updateTaskUser } = require('./controller/controllerTask');
const { validationLogin } = require('./middleware/middlewareTask');

const app = express();
app.use(express.json());

const PORT = 3000;

app.post('/register/login', registerUser);

app.post('/login', validationLogin, loginUser)

app.put('/update', updateTaskUser)

app.listen(PORT, () => console.log(`Servirdor rodando na porta: ${PORT}`));