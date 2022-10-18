import { JSONSchema7, JSONSchema7Definition } from "json-schema";
export declare const parseAnyOf: (schema: JSONSchema7 & {
    anyOf: JSONSchema7Definition[];
}) => string;
