const express = require('express');
const router = express.Router();

const mealsController = require('../controllers/meals');
const isSignedIn = require('../middleware/is-signed-in');

router.use(isSignedIn);

router.get('/', mealsController.index);


router.get('/new', mealsController.new);


router.post('/', mealsController.create);


router.get('/:id/edit', mealsController.edit);


router.put('/:id', mealsController.update);


router.delete('/:id', mealsController.destroy);


module.exports = router;




