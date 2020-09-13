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

// Third-party Libraries
const express = require("express");
const router = express.Router({ mergeParams: true });

// Feature Flags
const FF = require("../../config/featureFlags");

// Export Route
module.exports = (DB) => {
  // API Routes (V1)
  const auth = require("./auth.js")(DB);

  // Version Routes
  if (FF.ENABLE_AUTH) router.use("/auth", auth);

  // Return Router
  return router;
};
