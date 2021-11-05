const jwt = require('jsonwebtoken');
const model = require('../model/modelTask');

const secret = 'secretdesafioebytr';

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await model.findUser
  } catch {

  }
};