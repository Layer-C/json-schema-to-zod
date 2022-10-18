"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIfThenElse = void 0;
const parseSchema_1 = require("./parseSchema");
const parseIfThenElse = (schema) => {
    const $if = (0, parseSchema_1.parseSchema)(schema.if);
    const $then = (0, parseSchema_1.parseSchema)(schema.then);
    const $else = (0, parseSchema_1.parseSchema)(schema.else);
    return `z.union([${$then},${$else}]).superRefine((value,ctx) => {
  const result = ${$if}.safeParse(value).success
    ? ${$then}.safeParse(value)
    : ${$else}.safeParse(value);
  if (!result.success) {
    result.error.errors.forEach((error) => ctx.addIssue(error))
  }
})`;
};
exports.parseIfThenElse = parseIfThenElse;
