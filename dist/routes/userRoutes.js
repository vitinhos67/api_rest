"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _userController = require('../controller/userController'); var _userController2 = _interopRequireDefault(_userController);
var _loginRequired = require('../middleware/loginRequired');

const router = _express2.default.Router();

router.post('/', _userController2.default.store);
router.get('/', _loginRequired.auth, _userController2.default.show);
router.get('/all', _userController2.default.showAll);
router.delete('/', _loginRequired.auth, _userController2.default.delete);
router.patch('/', _loginRequired.auth, _userController2.default.update);

exports. default = router;

// REGRAS DE NEGOCIO

/*
INDEX -> LISTA TODOS USUARIOS: METHOD GET
SHOW -> MOSTRA USUARIOS -> METHOD GET
DELETE -> DELETA USUARIOS: METHOD DELETE
UPTADE -> ATULIZA DADOS DE USUARIOS: METHOD PATCH OU PUT
STORE/CREATE -> CRIA USUARIOS: METHOD POST
*/
