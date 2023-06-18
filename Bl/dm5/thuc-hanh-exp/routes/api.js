var express = require('express');
var router = express.Router();
var user_api = require('../controllers/api/user.api');

// url: get: /api/users
router.get('/users', user_api.list);

router.post('/users', user_api.add);

router.put('/users:idu', user_api.edit);

router.delete('/users:idu', user_api.delete);



module.exports = router;

