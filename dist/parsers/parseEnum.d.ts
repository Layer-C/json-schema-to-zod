import { JSONSchema7, JSONSchema7Type } from "json-schema";
export declare const parseEnum: (schema: JSONSchema7 & {
    enum: JSONSchema7Type[] | JSONSchema7Type;
}) => string;
