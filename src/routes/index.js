const express = require('express');
const routerUser = require('./user.router');
const router = express.Router();

// las rutas van acá

router.use('/users', routerUser)


module.exports = router; 