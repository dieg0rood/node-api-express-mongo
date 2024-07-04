const router = require('express').Router();

const bikesRouter = require('./bikes')

router.use('/bikes', bikesRouter)

module.exports = router;