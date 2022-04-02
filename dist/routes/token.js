"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _Token = require('../controller/Token'); var _Token2 = _interopRequireDefault(_Token);

const router = _express2.default.Router();

router.post('/', _Token2.default.store);

exports. default = router;
