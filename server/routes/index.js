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

// Third-party Libraries
const express = require("express");
const path = require("path");
const router = express.Router({ mergeParams: true });

module.exports = function (_) {

  router.get("/", function (_, res) {
    res.sendFile(path.join(__dirname, "../build/", "index.html"));
  });

  router.get("/index", function (_, res) {
    res.sendFile(path.join(__dirname, "../build/", "index.html"));
  });

  router.use("*", express.static(__dirname, "/../build"));

  return router;
};
