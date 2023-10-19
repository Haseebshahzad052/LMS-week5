const { models } = require("../models/definitions");
const bcrypt = require("bcrypt")
module.exports = {
  getUsers: async () => {
    const result = await models.user.findAll();
    return result;
  },
  createUser: async (data) => {
    console.log(data);
    const result = await models.user.create(data);
    return result;
  },
};
