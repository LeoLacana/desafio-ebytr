const { getUser } = require('../service/serviceTask');

const validationLogin = async (req, res, next) => {
  const { nome, senha } = req.body;
  console.log('1');
  const user = await getUser(nome, senha);
  if (!user) {
    res.status(400).json({ message: 'Nome ou senha Incorreto!' })
  }
  next();
}

module.exports = {
  validationLogin,
}