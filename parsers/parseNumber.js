"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumber = void 0;
const parseNumber = (schema) => {
    let r = "z.number()";
    if (schema.format === "int64" ||
        schema.multipleOf === 1 ||
        schema.type === "integer") {
        r += ".int()";
    }
    if (typeof schema.multipleOf === "number" && schema.multipleOf !== 1) {
        r += `.multipleOf(${schema.multipleOf})`;
    }
    if (typeof schema.minimum === "number") {
        if (schema.exclusiveMinimum === true) {
            r += `.gt({${schema.minimum}})`;
        }
        else {
            r += `.gte(${schema.minimum})`;
        }
    }
    else if (typeof schema.exclusiveMinimum === "number") {
        r += `.gt(${schema.exclusiveMinimum})`;
    }
    if (typeof schema.maximum === "number") {
        if (schema.exclusiveMaximum === true) {
            r += `.lt({${schema.maximum}})`;
        }
        else {
            r += `.lte(${schema.maximum})`;
        }
    }
    else if (typeof schema.exclusiveMaximum === "number") {
        r += `.lt(${schema.exclusiveMaximum})`;
    }
    return r;
};
exports.parseNumber = parseNumber;
