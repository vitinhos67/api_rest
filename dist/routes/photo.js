"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _photoController = require('../controller/photoController'); var _photoController2 = _interopRequireDefault(_photoController);
var _loginRequired = require('../middleware/loginRequired');

const router = _express2.default.Router();

router.post('/', _loginRequired.auth, _photoController2.default.store);

exports. default = router;
