import { JSONSchema7, JSONSchema7TypeName } from "json-schema";
export declare const parseMultipleType: (schema: JSONSchema7 & {
    type: JSONSchema7TypeName[];
}) => string;
