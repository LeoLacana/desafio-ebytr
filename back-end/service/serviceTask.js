const { getTaks } = require('../model/modelTask');

const getTasks = async () => {
  try {
    const task = await getTaks();
    console.log(task);
    return task;
  } catch {
    return { message: "Algo deu errado!"}
  };
};

module.exports = {
  getTasks,
}