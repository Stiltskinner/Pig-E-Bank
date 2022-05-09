const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const pigsRoutes = require('./pigs-routes.js');

router.use('/user', userRoutes);
router.use('/pigs', pigsRoutes);

module.exports = router;