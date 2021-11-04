const { ObjectId } = require('bson');
const connection = require('./connection');

// const insertTask = () => {

// }

async function getTaks() {
  const db = await connection();
  const tasks = await db.collection('task').find().toArray();
  // console.log(tasks);
  return tasks;
}

module.exports = {
  getTaks,
}