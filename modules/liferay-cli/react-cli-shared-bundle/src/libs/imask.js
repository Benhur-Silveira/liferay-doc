import IMask from "imask";

/**
 * Applies a mask to a given value.
 *
 * @param {Object} param - { mask, value }
 * @param {"cpf","cnpj","cep",string} param.mask - The mask to apply, or one of the following shortcuts:
 *                              - "cpf": 000.000.000-00
 *                              - "cep": 00000-000
 *                              - "cnpj": 00.000.000/0000-00
 * @param {string|number} param.value - The value to apply the mask to
 * @returns {string} The masked value
 */
export const mask = ({ mask: maskValue, value }) => {
  if (!maskValue) return value;
  if (value === undefined) return "";

  if (maskValue === "cpf") {
    maskValue = "000.000.000-00";
  }
  if (maskValue === "cep") {
    maskValue = "00000-000";
  }
  if (maskValue === "cnpj") {
    maskValue = "00.000.000/0000-00";
  }
  const creator = IMask.createMask({
    mask: maskValue,
  });
  return creator.resolve(value);
};
