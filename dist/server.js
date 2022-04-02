"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const PORT = process.env.PORT || 3001;

_app2.default.listen(3001, () => {
  console.log('---------------------------');
  console.log(`Listening PORT ${PORT}`);
  console.log(`click here for go to server: http://localhost:${PORT}`);

  console.log('---------------------------');
});
