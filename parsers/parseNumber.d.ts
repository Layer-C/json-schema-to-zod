import { JSONSchema7 } from "json-schema";
export declare const parseNumber: (schema: JSONSchema7 & {
    type: "number" | "integer";
}) => string;
