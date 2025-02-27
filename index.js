"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSchema = exports.jsonSchemaToZodDereffed = exports.jsonSchemaToZod = void 0;
const jsonSchemaToZod_1 = require("./jsonSchemaToZod");
Object.defineProperty(exports, "jsonSchemaToZod", { enumerable: true, get: function () { return jsonSchemaToZod_1.jsonSchemaToZod; } });
Object.defineProperty(exports, "jsonSchemaToZodDereffed", { enumerable: true, get: function () { return jsonSchemaToZod_1.jsonSchemaToZodDereffed; } });
const parseSchema_1 = require("./parsers/parseSchema");
Object.defineProperty(exports, "parseSchema", { enumerable: true, get: function () { return parseSchema_1.parseSchema; } });
exports.default = jsonSchemaToZod_1.jsonSchemaToZod;
