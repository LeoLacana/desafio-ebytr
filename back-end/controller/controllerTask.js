const { setUser, getUser, atualizationTaskUser } = require('../service/serviceTask');

const registerUser = async (req, res) => {
  const { nome, senha } = req.body;
  await setUser(nome, senha, role = 'user');
  return res.status(200).json({ message: "Cadrasto feito com sucesso!" });
}

const loginUser = async (req, res) => {
  const { nome, senha } = req.body;
  console.log('2');
  const user = await getUser(nome, senha);
  return res.status(200).json(user)
}

const updateTaskUser = async (req, res) => {
  const { nome, senha, tasks } = req.body;
  const message = await atualizationTaskUser(nome, senha, tasks);
  return res.status(200).json(message);
}

module.exports = {
  registerUser,
  loginUser,
  updateTaskUser,
}