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

module.exports = {
    // API Config
    API_VERSION: process.env.API_VERSION,
    API_ROUTE_PATH: process.env.API_ROUTE_PATH,
    API_PORT: process.env.API_PORT,
    // Datbase Config
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    // 3rd Party Services
    GOOGLE_APIKEY: process.env.GOOGLE_APIKEY,
    STRIPE_APIKEY: process.env.STRIPE_APIKEY,
    SENDGRID_APIKEY: process.env.SENDGRID_APIKEY,
    // Session Management
    SESSION_CONF: {
        secret: 'NERD2020',
        cookie: { maxAge: 7*24*60*60 },
        resave: true,
        saveUninitialized: true
    },
    // Storage Driver Config
    STORAGE_TYPE: process.env.STORAGE_TYPE,
    STORAGE_ROOT: process.env.STORAGE_ROOT,
    // S3 Storage Options
    S3_REGION: process.env.S3_REGION,
};