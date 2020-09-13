/*                                            *\
** ------------------------------------------ **
**           Sample - Wet Bat PoC     	      **
** ------------------------------------------ **
**  Copyright (c) 2020 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */
const fs = require("fs");
const path = require("path");

const { Model, DataTypes } = require("sequelize");

const DB = require("../../lib/Database");

// Migration DB Model
class Migration extends Model {}
Migration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    migration: DataTypes.STRING,
    updateAat: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  },
  { sequelize: DB, modelName: "migration" }
);

// Run
module.exports = (() => {
  const _DB = DB.getQueryInterface();
  // Run Migrations in Order of Name (Date)
  fs.readdir(path.join(__dirname, "migrations"), (err, files) => {
    if (err) console.error(err);
    else
      files
        .sort((a, b) => b - a)
        .map(async (file) => {
          // Run up()
          await require(path.join(__dirname, "migrations", file))(DB).up();
          // Store Migration in DB
          await Migration.create({
            migration: file,
            updateAat: new Date(),
            createdAt: new Date(),
          });
        });
  });
})();
