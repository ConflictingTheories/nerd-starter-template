const { Model, DataTypes } = require("sequelize");

// Pass in DB Handler Instance
module.exports = (DB) => {
  class User extends Model {}
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      salt: DataTypes.STRING,
    },
    { DB, modelName: "user" }
  );
  return User;
};
