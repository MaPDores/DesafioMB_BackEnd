"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var sensor_data = new _mongoose["default"].Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  pressure: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  release_date: {
    type: Number,
    required: true
  }
});

var _default = _mongoose["default"].model('sensor', sensor_data);

exports["default"] = _default;
//# sourceMappingURL=sensor_data.js.map