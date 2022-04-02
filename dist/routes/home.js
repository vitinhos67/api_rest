"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _home = require('../controller/home'); var _home2 = _interopRequireDefault(_home);

const router = _express2.default.Router();

router.get('/', _home2.default.index);

router.get('/home', (req, res) => {
  res.send('Esta roda ta sendo escrita');
});

exports. default = router;
