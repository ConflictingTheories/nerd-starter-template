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
var express = require('express');
var router = express.Router({ mergeParams: true });

// Export Route
module.exports = (DB) => {
    // API Routes (V1)
    const auth = require('./auth.js')(DB);
  
    // Version Routes
    router.use('/auth', auth);

    // Return Router
    return router;
}