express = require("express"),
router = express.Router();
itemCtrl = require('./item-controller');

router.get('/hello/:foo/:bar', itemCtrl.getWorld);

router.post('/hello', itemCtrl.postWorld);

module.exports = router;