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

module.exports = (() => {
  const { saltHashPassword } = require("../../../lib/common/Crypto");
  const User = require("../../../models/User");
  const DB = require("../../../lib/database");
  // Seed Users Table
  return {
    seed: async () => {
      try {
        await DB.sync();
        // User
        const name = "Administrator";
        const username = "admin@example.com";
        const saltedPass = saltHashPassword("password");
        const admin = await User.create({
          username: username,
          passwordHash: saltedPass.passwordHash,
          salt: saltedPass.salt,
          name: name,
        });
      } catch (err) {
        console.error(err);
      }
    },
  };
})();
