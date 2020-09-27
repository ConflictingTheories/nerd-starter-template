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

const { DataTypes } = require("sequelize");

module.exports = (() => {
  // Models
  const User = require("../../../models/User");
  const migrations = [
    User,
  ];

  return {
    up: () => {
      return migrations.reduce(async (_, x) => {
        return await x.sync();
      }, null);
    },
    down: () => {
      return migrations.reverse().reduce(async (_, x) => {
        return await x.drop({ cascade: true });
      }, null);
    },
  };
})();
