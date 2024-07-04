const router = require('express').Router();

const bikeController = require('../controllers/bikeController')

router.route('/:id').get((req, res) => bikeController.find(req, res))
router.route('/').get((req, res) => bikeController.list(req, res))
router.route('/').post((req, res) => bikeController.create(req, res))
router.route('/:id').put((req, res) => bikeController.update(req, res))
router.route('/:id').delete((req, res) => bikeController.delete(req, res))

module.exports = router;