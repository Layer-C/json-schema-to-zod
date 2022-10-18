"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAnyOf = void 0;
const parseSchema_1 = require("./parseSchema");
const parseAnyOf = (schema) => {
    return `z.union([${schema.anyOf.map(parseSchema_1.parseSchema)}])`;
};
exports.parseAnyOf = parseAnyOf;
