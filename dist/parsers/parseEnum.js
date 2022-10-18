"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEnum = void 0;
const parseEnum = (schema) => {
    return Array.isArray(schema.enum)
        ? schema.enum.every((x) => typeof x === "string")
            ? `z.enum([${schema.enum.map((x) => JSON.stringify(x))}])`
            : `z.union([${schema.enum.map((x) => `z.literal(${JSON.stringify(x)})`)}])`
        : `z.literal(${JSON.stringify(schema.enum)})`;
};
exports.parseEnum = parseEnum;
