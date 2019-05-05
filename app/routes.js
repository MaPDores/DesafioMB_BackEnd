"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var sensor_controller = _interopRequireWildcard(require("./controllers/sensor_controller.js"));

var user_controller = _interopRequireWildcard(require("./controllers/user_controller.js"));

var routes = _express["default"].Router();

routes.post('/register', user_controller.register);
routes.post('/login', user_controller.login);
routes.get('/profile/:id', user_controller.profile);
routes.get('/sensor/:id', sensor_controller.findSensor);
var _default = routes;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map