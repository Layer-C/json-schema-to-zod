import { JSONSchema7, JSONSchema7Type } from "json-schema";
export declare const parseConst: (schema: JSONSchema7 & {
    const: JSONSchema7Type;
}) => string;
