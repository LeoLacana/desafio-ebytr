const { registerUser, findUser, updateTaskUser } = require('../model/modelTask');

const setUser = async (nome, senha, role) => {
  try {
    await registerUser(nome, senha, role);
  } catch {
    return { message: "Erro ao cadrastar, tente novamente" }
  };
};

const getUser = async (nome, senha) => {
  try {
    console.log('3');
    const user = await findUser(nome, senha);
    return user;
  } catch {
    return { message: 'Erro ao encontrar usuario, tente novamente' }
  }
}

const atualizationTaskUser = async (nome, senha, tasks) => {
  try {
    await updateTaskUser(nome, senha, tasks);
    return { message: "Atualização feita com sucesso!" }
  } catch {
    return { message: 'Erro na atualização' }
  }
}

module.exports = {
  setUser,
  getUser,
  atualizationTaskUser,
}