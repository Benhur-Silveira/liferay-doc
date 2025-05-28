import { validators } from "react-cli-shared-bundle/utils";

/***
 * @type {Object}
 * @property {function(string): boolean} validateEmail
 * @property {function(string): boolean} validateCPFCNPJ
 */
const sharedValidators = validators;

export const { validateEmail, validateCPFCNPJ } = sharedValidators;
