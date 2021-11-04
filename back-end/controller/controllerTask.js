const { getTasks } = require('../service/serviceTask');

const getTask = async (req, res) => {
  const task = await getTasks();
  console.log(task);
  return res.status(200).json(task);
};

module.exports = {
  getTask,
}