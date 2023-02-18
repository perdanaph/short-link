"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var nanoid_1 = require("nanoid");
var nanoid = (0, nanoid_1.customAlphabet)('abcdefghijklmnopqrstuvwxyz0987654321', 6);
var shortUrlSchema = new mongoose_1.default.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
        default: function () { return nanoid(); },
    },
    destination: { type: String, required: true },
});
var shortUrl = mongoose_1.default.model('shortUrl', shortUrlSchema);
exports.default = shortUrl;
