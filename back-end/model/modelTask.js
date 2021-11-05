const { ObjectId } = require('bson');
const connection = require('./connection');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = 'secretdesafioebytr';

async function registerUser(nome, senha, role) {
  const db = await connection();
  jwt.sign({ data: role }, secret, jwtConfig);
  const user = await db.collection('task').insertOne({ nome, senha, role, tasks: [] });
  console.log('Ola')
}

async function findUser(nome, senha) {
  console.log('4');
  const db = await connection();
  const user = await db.collection('task').find({ $and: [{ nome }, { senha }] }).toArray();
  console.log(user);
  return user[0];
}

async function updateTaskUser(nome, senha, tasks) {
  const db = await connection();
  await db.updateOne(
    { 
      $and: 
        [
          { nome },
          { senha }
        ]
    },
    { 
      $set: { tasks }
    } 
  )
};

module.exports = {
  registerUser,
  findUser,
  updateTaskUser,
}