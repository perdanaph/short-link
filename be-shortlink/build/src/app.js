"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("config"));
var routes_1 = __importDefault(require("./routes"));
var body_parser_1 = __importDefault(require("body-parser"));
var db_connect_1 = __importDefault(require("./utils/db.connect"));
var app = (0, express_1.default)();
var port = config_1.default.get('PORT');
app.use(body_parser_1.default.json());
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
    (0, routes_1.default)(app);
    (0, db_connect_1.default)();
});
