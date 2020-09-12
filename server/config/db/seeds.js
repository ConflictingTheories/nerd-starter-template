const cryptoUtils = require('../../lib/Crypto');
const DB = require('../../lib/Database');
// Seed DB
module.exports = () => {
  // Users
  (async () => {
    await DB.sync();
    const saltedPass = cryptoUtils.saltHashPassword('password')
    const jane = await User.create({
      username: "janedoe",
      password: saltedPass.passwordHash,
      salt: saltedPass.salt
    });
    console.log(jane.toJSON());
  })();
};
