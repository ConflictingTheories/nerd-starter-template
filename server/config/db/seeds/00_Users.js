/*                                            *\
** ------------------------------------------ **
**           Sample - Weather SPA    	      **
** ------------------------------------------ **
**  Copyright (c) 2020 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */

module.exports = (DB) => {
  const { saltHashPassword } = require("../../../lib/Crypto");
  const User = require("../../../models/User")(DB);
  // Seed Users Table
  return {
    seed: async () => {
      await DB.sync();
      const saltedPass = saltHashPassword("password");
      const jane = await User.create({
        username: "janedoe",
        password: saltedPass.passwordHash,
        salt: saltedPass.salt,
      });
      console.log(jane.toJSON());
    },
  };
};
