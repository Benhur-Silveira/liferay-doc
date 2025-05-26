import { mask } from "react-yo-shared-bundle/utils";

/**
 * @typedef {Object} mask
 * @property {function(string, string): string} cpf - Masks a CPF number
 * @property {function(string, string): string} cnpj - Masks a CNPJ number
 * @property {function(string, string): string} phone - Masks a phone number
 * @property {function(string, string): string} cep - Masks a brazilian zip code
 */
export { mask };
