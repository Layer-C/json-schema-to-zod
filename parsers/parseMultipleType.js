"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMultipleType = void 0;
const parseSchema_1 = require("./parseSchema");
const parseMultipleType = (schema) => {
    return `z.union([${schema.type.map((type) => (0, parseSchema_1.parseSchema)(Object.assign(Object.assign({}, schema), { type })))}])`;
};
exports.parseMultipleType = parseMultipleType;
