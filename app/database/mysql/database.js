"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Sequelize = require('sequelize');

var sequelize = new Sequelize('db_projetoiot', 'root', 'LDbm4hGzFRHxM5y2', {
  host: '35.247.204.17',
  dialect: 'mysql'
});
var _default = sequelize;
exports["default"] = _default;
//# sourceMappingURL=database.js.map