/*                                            *\
** ------------------------------------------ **
**           Sample - NERD Starter    	      **
** ------------------------------------------ **
**  Copyright (c) 2020 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */

const { Model, DataTypes } = require("sequelize");
const DB = require("../lib/database");
// Pass in DB Handler Instance
module.exports = (() => {
  class User extends Model {}
  User.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      salt: DataTypes.STRING,
    },
    { sequelize: DB, modelName: "user" }
  );
  return User;
})();
