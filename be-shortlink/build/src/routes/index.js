"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shortUrl_controller_1 = require("../controllers/shortUrl.controller");
var validateResource_1 = __importDefault(require("./../middlewares/validateResource"));
var createShortUrl_schema_1 = __importDefault(require("./../schemas/createShortUrl.schema"));
function routes(app) {
    app.get('/', function (req, res) {
        return res.status(200).json({
            message: 'Hello dan',
        });
    });
    app.post('/api/v1/short-url', (0, validateResource_1.default)(createShortUrl_schema_1.default), shortUrl_controller_1.createShortUrl);
    app.get('/:shortId', shortUrl_controller_1.handleRedirect);
    app.get('/api/v1/:shortId', shortUrl_controller_1.getShortUrl);
    app.get('/api/v1/analytics', shortUrl_controller_1.getAnalytics);
}
exports.default = routes;
