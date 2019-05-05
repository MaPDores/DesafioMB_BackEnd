"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
app.use('/', _routes["default"]);
app.listen(3333);
//# sourceMappingURL=server.js.map