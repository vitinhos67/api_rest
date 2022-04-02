"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _alunoController = require('../controller/alunoController'); var _alunoController2 = _interopRequireDefault(_alunoController);
var _loginRequired = require('../middleware/loginRequired');

const router = _express2.default.Router();

router.get('/', _alunoController2.default.index); // LER
router.post('/', _alunoController2.default.store); // CRIAR
router.delete('/:id', _loginRequired.auth, _alunoController2.default.delete); // DELETAR
router.put('/:id', _loginRequired.auth, _alunoController2.default.update); // ATUALIZAR
router.get('/:id', _loginRequired.auth, _alunoController2.default.show); // MOSTRAR

exports. default = router;
