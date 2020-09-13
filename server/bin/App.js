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

// THIRD-PARTY LIBRARIES
// Express + Third-Party Libraries
const bp = require("body-parser");
const cp = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const express = require("express");
const app = express();
const server = require("http").Server(app);

// CONFIGURATION
const Error = require("../lib/Error");
const DB = require("../lib/Database");

// INDEX MODULES
const index = require("../routes/index")(DB);

// ---- API CODE BELOW ----

// REQUEST HANDLER OPTIONS
app.use(
  session({
    secret: "NERD2020",
    cookie: { maxAge: 3600000 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cp());
app.use(cors());
app.use(bp.json({ limit: "10mb" }));
app.use(
  bp.urlencoded({
    limit: "10mb",
    extended: false,
  })
);

// === API ROUTES
app.use("/api/:ver", (req, res) => {
  let apiVer = req.params.ver;
  console.log(apiVer, req.params);
  // Switch Versions
  switch (apiVer) {
    case "v1":
      apiRouter = require("../routes/" + apiVer + "/index.js")(DB);
      apiRouter(req, res);
      break;
    default:
      Error.setError("Error: Invalid API Version", 400, {});
      Error.sendError(res);
  }
});

// === STATIC Files
app.use("/static", express.static(__dirname + "/../build/static"));

// === WEB ROUTE
app.use("/", index);

// LISTEN ON PORT
server.listen(process.env.APP_PORT, () => {
  console.log("NERD App is now live on Port: ", process.env.APP_PORT);
});

// FALLBACK FOR PORT
process.on("uncaughtException", function (e) {
  console.log("ERROR: " + e);
  if (e.errno === "EADDRINUSE") {
    console.log("Error ---> Port in Use: Please select another port: ");
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      "PORT IN USE: Please select a different port (3000+)? ",
      (answer) => {
        // TODO: Log the answer in a database
        rl.close();
        let port = answer;
        server.listen(port);
      }
    );
  }
});

module.exports = server;
