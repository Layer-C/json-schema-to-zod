import { JSONSchema7, JSONSchema7Definition } from "json-schema";
export declare const parseIfThenElse: (schema: JSONSchema7 & {
    if: JSONSchema7Definition;
    then: JSONSchema7Definition;
    else: JSONSchema7Definition;
}) => string;
