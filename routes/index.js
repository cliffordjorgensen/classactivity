const express = require("express");
const router = express.Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => res.send("hello world"));

module.exports = router;