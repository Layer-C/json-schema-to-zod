import { JSONSchema7, JSONSchema7Definition } from "json-schema";
export declare function parseAllOf(schema: JSONSchema7 & {
    allOf: JSONSchema7Definition[];
}): string;
