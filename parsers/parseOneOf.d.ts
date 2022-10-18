import { JSONSchema7, JSONSchema7Definition } from "json-schema";
export declare const parseOneOf: (schema: JSONSchema7 & {
    oneOf: JSONSchema7Definition[];
}) => string;
