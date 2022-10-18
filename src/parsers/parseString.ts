import { JSONSchema7 } from "json-schema";

export const parseString = (schema: JSONSchema7 & { type: "string" }) => {
  // @ts-ignore
  let r = `z.string(${(schema.message && schema.message.required) ? `{ required_error: ${JSON.stringify(schema.message.required)} }` : ''})`;
  if (schema.pattern)
    // @ts-ignore
    r += `.regex(new RegExp(${JSON.stringify(schema.pattern)})${(schema.message && schema.message.pattern) ? `, ${JSON.stringify(schema.message.pattern)}` : ''})`;
  if (schema.format === "email") r += ".email()";
  else if (schema.format === "uri") r += ".url()";
  else if (schema.format === "uuid") r += ".uuid()";
  if (typeof schema.minLength === "number") r += `.min(${schema.minLength})`;
  if (typeof schema.maxLength === "number") r += `.max(${schema.maxLength})`;
  return r;
};
