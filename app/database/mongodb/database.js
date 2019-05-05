"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var uri = "mongodb+srv://user:123@desafiomb-xwfc4.mongodb.net/ProjetoLavourasIoT?retryWrites=true";

_mongoose["default"].connect(uri, {
  useNewUrlParser: true
}).then(function (result) {
  console.log("Connected");
})["catch"](function (e) {
  console.log("ERROR");
});
//# sourceMappingURL=database.js.map