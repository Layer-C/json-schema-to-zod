"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
const prettier_1 = __importDefault(require("prettier"));
const parser_babel_1 = __importDefault(require("prettier/parser-babel"));
const format = (source) => prettier_1.default.format(source, {
    parser: "babel",
    plugins: [parser_babel_1.default],
});
exports.format = format;
